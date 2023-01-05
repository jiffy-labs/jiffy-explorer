import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";
// import decodeInputData from "../utils/test";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
    Grid,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import NavBar from "../components/NavBar";

const transactionDetailsMeta = [
    { identifier: "blockNumber", text: "BLOCK NUMBER" },
    { identifier: "blockTime", text: "BLOCK TIME" },
    { identifier: "transactionHash", text: "TRANSACTION HASH" },
    { identifier: "sender", text: "SENDER" },
    { identifier: "target", text: "TARGET" },
    { identifier: "success", text: "SUCCESS" },
    { identifier: "revertReason", text: "REVERT REASON" },
    { identifier: "actualGasCost", text: "FEE" },
];

const developerDetailsMeta = [
    { identifier: "value", text: "VALUE" },
    { identifier: "actualGasUsed", text: "FEE" },
    { identifier: "actualGasPrice", text: "FEE" },
    { identifier: "callData", text: "CALLDATA" },
    { identifier: "input", text: "INPUT" },
];

const UserOpHash = () => {
    let { userOpHash } = useParams();
    const [userOp, setUserOp] = useState({});
    const [loading, setLoading] = useState(false);
    const [decodingStatus, setDecodingStatus] = useState(false);
    const [decodedData, setDecodedData] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch("/api/v0/getUserOpInfo?userOpHash=" + userOpHash).then((res) =>
            res.json().then((userOp) => {
                if (userOp.error) return <pre>{userOp.message}</pre>;
                setUserOp(userOp);
                setLoading(false);
            })
        );
    }, []);

    useEffect(() => {
        if (Object.keys(userOp) == 0) return;
        fetch(
            "/api/v0/decodeTransaction?inputData=" +
                userOp.callData +
                "&value=" +
                userOp.value +
                "&contractAddress=" +
                userOp.target +
                "&network=" +
                userOp.network
        ).then((res) =>
            res.json().then((decodedData) => {
                if (decodedData.error) {
                    console.log("decoding is broken , contact admin")
                    return;
                };
                setDecodingStatus(true)
                setDecodedData(decodedData);
                console.log(decodedData)
            })
        );
    }, [userOp]);

    if (loading) return "Loading...";

    return (
        <>
            <NavBar />
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Paper elevation={2} sx={{ marginTop: "50px" }}>
                        <Container>
                            <Typography variant="h3">User Operation</Typography>
                        </Container>
                        <Container sx={{ marginTop: "50px" }}>
                            <Typography variant="h6">User Operation Hash:</Typography>
                            <Typography variant="body1">{userOp.userOpHash}</Typography>
                        </Container>
                        <Container sx={{ marginTop: "50px" }}>
                            <Typography variant="h4" align="left">
                                Transaction Details
                            </Typography>
                            <List>
                                {userOp.blockNumber && (
                                    <ListItem disablePadding key="blockNumber">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>BLOCK NUMBER</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.blockNumber}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.blockTime && (
                                    <ListItem disablePadding key="blockTime">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>BLOCK TIME</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {new Date(userOp.blockTime * 1000).toString()}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.transactionHash && (
                                    <ListItem disablePadding key="transactionHash">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>TRANSACTION HASH</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.transactionHash}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.sender && (
                                    <ListItem disablePadding key="sender">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>SENDER</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.sender}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.target && (
                                    <ListItem disablePadding key="target">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>TARGET</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.target}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.success && (
                                    <ListItem disablePadding key="success">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>STATUS</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.success ? "SUCCESS" : "FAILURE"}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.revertReason && (
                                    <ListItem disablePadding key="revertReason">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>REVERT REASON</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.revertReason}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.actualGasCost && (
                                    <ListItem disablePadding key="actualGasCost">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>FEE</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {(parseInt(userOp.actualGasCost) / 10 ** 18).toFixed(5).toString()}{" "}
                                            {" " + userOp.network == "georli" ? "ETH" : "MATIC"}
                                        </ListItemText>
                                    </ListItem>
                                )}
                            </List>
                        </Container>
                        <Container sx={{ marginTop: "50px" }}>
                            <Typography variant="h4" align="left">
                                Developer Details
                            </Typography>
                            <List>
                                {userOp.value && (
                                    <ListItem disablePadding key="value">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>REVERT REASON</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.value}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {
                                    decodedData.signature && (
                                        <ListItem disablePadding key="actualGasUsed">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>FUNCTION</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {decodedData.signature}
                                        </ListItemText>
                                    </ListItem>
                                    )
                                }
                                {userOp.actualGasUsed && (
                                    <ListItem disablePadding key="actualGasUsed">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>ACTUAL GAS USED</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {(parseInt(userOp.actualGasUsed) / 10 ** 18).toFixed(5).toString()}{" "}
                                            {" " + userOp.network == "georli" ? "ETH" : "MATIC"}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.actualGasPrice && (
                                    <ListItem disablePadding key="actualGasPrice">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>ACTUAL GAS PRICE</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {(parseInt(userOp.actualGasPrice) / 10 ** 18).toFixed(5).toString()}{" "}
                                            {" " + userOp.network == "georli" ? "ETH" : "MATIC"}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.callData && (
                                    <ListItem disablePadding key="callData">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>CALLDATA</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.callData}
                                        </ListItemText>
                                    </ListItem>
                                )}
                                {userOp.input && (
                                    <ListItem disablePadding key="input">
                                        <ListItemIcon>
                                            <HelpOutlineIcon size="small" />
                                        </ListItemIcon>
                                        <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>TRANSACTION INPUT</ListItemText>
                                        <ListItemText>:</ListItemText>
                                        <ListItemText
                                            sx={{ width: "60%", wordWrap: "break-word", borderBottom: "1px solid rgb(235, 235, 235)" }}
                                        >
                                            {userOp.input}
                                        </ListItemText>
                                    </ListItem>
                                )}
                            </List>
                        </Container>
                    </Paper>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    );
};

export default UserOpHash;
