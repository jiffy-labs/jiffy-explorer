import { Col, Container, Nav, Row } from "react-bootstrap";
import LinkLayout from "../components/LinkingLayout";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Search from "../components/Search";
import { useEffect, useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Pagination from "react-bootstrap/Pagination";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import moment from "moment";
import { Heading } from "@chakra-ui/react";
import {ethers, BigNumber} from "ethers";

const columns = [
    { dataField: "userOpHash", text: "UserOpHash" },
    { dataField: "blockTime", text: "Age" },
    { dataField: "sender", text: "Sender" },
    { dataField: "blockNumber", text: "BlockNumber" },
    { dataField: "gasCost", text: "Gas Spent" },
    { dataField: "network", text: "Network"},
    { dataField: "status", text: "Status" },
    { dataField: "target", text: "Target" },
];

let abiCoder = new ethers.utils.AbiCoder()
let userOpsParams = ["tuple(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]","address"]


const getTarget = (network, calldata, sender, nonce) => {
    if (network != "mumbai") return ""

    const decodedInput = abiCoder.decode(userOpsParams, "0x"+calldata.slice(10))
    console.log(decodedInput[0]);
    if (decodedInput==null) return ""
    for(let userOpIdx in decodedInput[0]) {
        let userOp = decodedInput[0][userOpIdx]
        if (sender.toLowerCase() == userOp[0].toLowerCase() && nonce.toString() == userOp[1].toString() ){
            console.log("here3")
            return  "0x"+userOp[3].slice(34,74)
        }
    }
}

const convertGraphDataToRows = (data) => {
    let rows = [];
    for (let idx in data) {
        let userOp = data[idx];
        let timePassedInEpoch = new Date().getTime() - userOp.blockTime * 1000;
        let timePassed = moment.duration(timePassedInEpoch);
        let requestLink = "/userOpHash/" + userOp.userOpHash;
        let target = getTarget(userOp.network,userOp.input,userOp.sender,userOp.nonce);
        let row = {
            transactionHash: <a href={requestLink}>{userOp.userOpHash.slice(0, 10) + "..."}</a>,
            userOpHash: <a href={requestLink}>{userOp.userOpHash.slice(0, 10) + "..."}</a>,
            blockTime: timePassed.humanize() + " ago",
            sender: userOp.sender.slice(0, 10) + "...",
            gasCost: (userOp.actualGasCost / 10 ** 18).toFixed(5).toString() + " ETH",
            blockNumber: userOp.blockNumber,
            status: userOp.success ? "SUCCESS" : "REVERT",
            network: userOp.network,
            target: target
        };
        rows.push(row);
    }
    return rows;
};

const Address = () => {
    let { address } = useParams();
    // const { data, loading, error } = useQuery(gql(ADDRESS_QUERY.replace("SENDER_ENTRY", address)));
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/v0/getAddressActivity?address=" + address).then((res) =>
            res.json().then((userOps) => {
                if(userOps.error) return <pre>{userOps.message}</pre>
                setData(userOps);
                setLoading(false);
            })
        );
    }, []);

    useEffect(() => {
        if (data) {
            setRows(convertGraphDataToRows(data))
        }
    },[data])

    if(loading) return "Loading..."

    const options = {
        pageStartIndex: 1,
        firstPageText: "First",
        prePageText: "Back",
        nextPageText: "Next",
        lastPageText: "Last",
        nextPageTitle: "First page",
        prePageTitle: "Pre page",
        firstPageTitle: "Next page",
        lastPageTitle: "Last page",
    };

    return (
        <>
            <LinkLayout>
                <Container>
                    <Heading>Transactions</Heading>
                    <BootstrapTable keyField="userOpHash" data={rows} columns={columns} pagination={paginationFactory(options)} />
                </Container>
            </LinkLayout>
        </>
    );
};

export default Address;
