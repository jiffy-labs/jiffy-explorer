import NavBar from "../components/NavBar";
import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { styled } from "@mui/material/styles";
import TransactionTable from "../components/TransactionTable";
import moment from "moment";
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
    Paper,
    IconButton,
    Link,
    Button,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import { getReadableGasFee, updateNetwork } from "../common/utils";
import ReactGA from "react-ga4";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

// 66 characters - request ID
// 42 characters - address
const columns = [
    { dataField: "userOpHash", text: "HASH" },
    { dataField: "blockTime", text: "AGE" },
    { dataField: "sender", text: "SENDER" },
    // { dataField: "blockNumber", text: "BlockNumber" },
    { dataField: "target", text: "TARGET" },
    { dataField: "gasCost", text: "FEE" },
    { dataField: "network", text: "NETWORK" },
    // { dataField: "status", text: "Status" },
];

const CopyButtonDiv = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
}));

const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
};

const convertGraphDataToRows = (data) => {
    let rows = [];
    for (let idx in data) {
        let userOp = data[idx];
        let timePassedInEpoch = new Date().getTime() - userOp.blockTime * 1000;
        let timePassed = moment.duration(timePassedInEpoch);
        let userOpLink = "/userOpHash/" + userOp.userOpHash;
        let senderLink = "/address/" + userOp.sender;
        let row = {
            userOpHash: (
                <CopyButtonDiv>
                    <a href={userOpLink}>{userOp.userOpHash.slice(0, 10) + "..."}</a>
                    <IconButton onClick={() => handleCopy(userOp.userOpHash)}>
                        <ContentCopyIcon size="small" />
                    </IconButton>
                </CopyButtonDiv>
            ),
            blockTime: timePassed.humanize() + " ago",
            sender: (
                <CopyButtonDiv>
                    <a href={senderLink}>{userOp.sender.slice(0, 10) + "..."}</a>
                    <IconButton onClick={() => handleCopy(userOp.sender)}>
                        <ContentCopyIcon size="small" />
                    </IconButton>
                </CopyButtonDiv>
            ),
            blockNumber: userOp.blockNumber,
            gasCost: getReadableGasFee(userOp.actualGasCost, userOp.network),
            status: userOp.success ? "SUCCESS" : "REVERT",
            network: updateNetwork(userOp.network),
            target: (
                <CopyButtonDiv>
                    {userOp.target != null && userOp.target.slice(0, 10) + "..."}
                    <IconButton onClick={() => handleCopy(userOp.target || "")}>
                        <ContentCopyIcon size="small" />
                    </IconButton>
                </CopyButtonDiv>
            ),
        };
        rows.push(row);
    }
    return rows;
};

const Home = () => {
    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [toastOpen, setToastOpen] = useState(true);

    const handleClose = () => {
        setToastOpen(false);
    };

    const action = (
        <>
            <Typography variant="body2">
                New Website being developed! You can access&nbsp;
                <Link size="small" aria-label="close" color="inherit" href="https://app.jiffyscan.xyz/">
                    it here
                </Link>
                <br />
            </Typography>
            <br />
            <Button onClick={handleClose} color="inherit">
                <CloseIcon fontSize="small" />
            </Button>
        </>
    );

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        setLoading(true);
        fetch("/api/v0/getLatestTransactions").then((res) =>
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

    return (
        <>
            <NavBar page="Home" />
            <main>
                <Layout />
                <Container alignItems="center">
                    <Paper elevation={2} square="false" alignItems="center" sx={{ display: "contents" }}>
                        <Container variant="md" sx={{ width: "80%", backgroundColor: "white", padding: "50px", marginTop: "50px" }}>
                            <TransactionTable rows={rows} columns={columns} tableAlign="center" tableTitle="Latest Transactions" />
                        </Container>
                    </Paper>
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        open={toastOpen}
                        action={action}
                        key="bottom-center"
                    />
                </Container>
            </main>
        </>
    );
};

export default Home;
