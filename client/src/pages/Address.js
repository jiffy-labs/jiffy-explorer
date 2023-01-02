import { useEffect, useMemo, useState } from "react";
// import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import moment from "moment";
// import { Heading, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Flex } from "@chakra-ui/react";
import { ethers, BigNumber } from "ethers";
import NavBar from "../components/NavBar";
import {
    Container,
    Table,
    TableBody,
    IconButton,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
    Paper,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { styled } from "@mui/material/styles";
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

let abiCoder = new ethers.utils.AbiCoder();
let userOpsParams = ["tuple(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]", "address"];

const getTarget = (network, calldata, sender, nonce) => {
    if (network != "mumbai") return "";

    const decodedInput = abiCoder.decode(userOpsParams, "0x" + calldata.slice(10));
    console.log(decodedInput[0]);
    if (decodedInput == null) return "";
    for (let userOpIdx in decodedInput[0]) {
        let userOp = decodedInput[0][userOpIdx];
        if (sender.toLowerCase() == userOp[0].toLowerCase() && nonce.toString() == userOp[1].toString()) {
            console.log("here3");
            return "0x" + userOp[3].slice(34, 74);
        }
    }
};

const CopyButtonDiv = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
}));

const convertGraphDataToRows = (data) => {
    let rows = [];
    for (let idx in data) {
        let userOp = data[idx];
        let timePassedInEpoch = new Date().getTime() - userOp.blockTime * 1000;
        let timePassed = moment.duration(timePassedInEpoch);
        let userOpLink = "/userOpHash/" + userOp.userOpHash;
        let senderLink = "/address/" + userOp.sender;
        let target = getTarget(userOp.network, userOp.input, userOp.sender, userOp.nonce);
        let row = {
            transactionHash: <a href={userOpLink}>{userOp.userOpHash.slice(0, 10) + "..."}</a>,
            userOpHash: (
                <CopyButtonDiv>
                    <a href={userOpLink}>{userOp.userOpHash.slice(0, 10) + "..."}</a>
                    <IconButton onClick={handleCopy()}>
                        <ContentCopyIcon size="small" />
                    </IconButton>
                </CopyButtonDiv>
            ),
            blockTime: timePassed.humanize() + " ago",
            sender: (
                <CopyButtonDiv>
                    <a href={senderLink}>{userOp.sender.slice(0, 10) + "..."}</a>
                    <IconButton onClick={handleCopy()}>
                        <ContentCopyIcon size="small" />
                    </IconButton>
                </CopyButtonDiv>
            ),
            gasCost: (userOp.actualGasCost / 10 ** 18).toFixed(5).toString() + " ETH",
            blockNumber: userOp.blockNumber,
            status: userOp.success ? "SUCCESS" : "REVERT",
            network: userOp.network,
            target: (
                <CopyButtonDiv>
                    {target.slice(0, 10) + "..."}
                    <IconButton onClick={handleCopy()}>
                        <ContentCopyIcon size="small" />
                    </IconButton>
                </CopyButtonDiv>
            ),
        };
        rows.push(row);
    }
    return rows;
};

const handleCopy = (e) => {
    console.log(e);
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
                if (userOps.error) return <pre>{userOps.message}</pre>;
                setData(userOps);
                setLoading(false);
            })
        );
    }, []);

    useEffect(() => {
        if (data) {
            setRows(convertGraphDataToRows(data));
        }
    }, [data]);

    if (loading) return "Loading...";

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
            <NavBar />
            <Container alignItems="center" >
            <Paper elevation={2} square="false" alignItems="center" sx={{display:'contents'}}>
                <Container variant="md" sx={{ width: '80%', backgroundColor: "white", padding: "50px", margin: "50px" }}>
                    <Box sx={{ paddingBottom: "50px" }}>
                        <Typography variant="h6">Wallet:</Typography>
                        <Typography variant="body1">{address}</Typography>
                    </Box>
                    <TransactionTable rows={rows} columns={columns} />
                </Container>
            </Paper>
            </Container>
        </>
    );
};

export default Address;
