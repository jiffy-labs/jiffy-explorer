import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import {ethers, BigNumber} from "ethers";
import NavBar from "../components/NavBar";
import moment from "moment";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, Paper } from "@mui/material";
import TransactionTable from "../components/TransactionTable";


const columns = [
    { dataField: "userOpHash", text: "HASH" },
    { dataField: "blockTime", text: "AGE" },
    { dataField: "sender", text: "SENDER" },
    // { dataField: "blockNumber", text: "BlockNumber" },
    { dataField: "target", text: "TARGET" },
    { dataField: "gasCost", text: "FEE" },
    { dataField: "network", text: "NETWORK"},
    // { dataField: "status", text: "Status" },
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
            userOpHash: <a href={requestLink}>{userOp.userOpHash.slice(0, 10) + "..."}</a>,
            blockTime: timePassed.humanize() + " ago",
            sender: userOp.sender.slice(0, 10) + "...",
            blockNumber: userOp.blockNumber,
            gasCost: (userOp.actualGasCost / 10 ** 18).toFixed(5).toString() + " ETH",
            status: userOp.success ? "SUCCESS" : "REVERT",
            network: userOp.network,
            target: target.slice(0, 10) + "...",
        };
        rows.push(row);
    }
    return rows;
};

const Block = () => {
    let { block } = useParams();
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/v0/getBlockActivity?block=" + block).then((res) =>
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
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
      };

    return (
        <>
            <NavBar />
            <Paper elevation={5} square="false" >
                <Container variant="md" sx={{ width: '80%', backgroundColor: "white", padding: "50px", marginTop: "50px",  }}>
                    <Box sx={{ paddingBottom: "50px" }}>
                        <Typography variant="h6">Block:</Typography>
                        <Typography variant="body1">{block}</Typography>
                    </Box>
                    <TransactionTable rows={rows} columns={columns} />
                </Container>
            </Paper>
        </>
    );
};

export default Block;
