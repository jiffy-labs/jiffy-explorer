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

const columns = [
    { dataField: "requestId", text: "UserOpHash" },
    { dataField: "blockTime", text: "Age" },
    { dataField: "sender", text: "Sender" },
    { dataField: "blockNumber", text: "BlockNumber" },
    { dataField: "gasCost", text: "Gas Spent" },
    { dataField: "status", text: "Status" },
];

const convertGraphDataToRows = (data) => {
    let rows = [];
    for (let idx in data) {
        let userOp = data[idx];
        let timePassedInEpoch = new Date().getTime() - userOp.blockTime * 1000;
        let timePassed = moment.duration(timePassedInEpoch);
        let requestLink = "/requestId/" + userOp.requestId;
        let row = {
            transactionHash: <a href={requestLink}>{userOp.requestId.slice(0, 10) + "..."}</a>,
            requestId: <a href={requestLink}>{userOp.requestId.slice(0, 10) + "..."}</a>,
            blockTime: timePassed.humanize() + " ago",
            sender: userOp.sender.slice(0, 10) + "...",
            gasCost: (userOp.actualGasCost / 10 ** 18).toFixed(5).toString() + " ETH",
            blockNumber: userOp.blockNumber,
            status: userOp.success ? "SUCCESS" : "REVERT",
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
        fetch("/api/getAddressActivity?address=" + address).then((res) =>
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
                    <BootstrapTable keyField="requestId" data={rows} columns={columns} pagination={paginationFactory(options)} />
                </Container>
            </LinkLayout>
        </>
    );
};

export default Address;
