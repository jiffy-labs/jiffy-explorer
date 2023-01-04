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
    { identifier: "value", text: "VALUE"},
    { identifier: "actualGasUsed", text: "FEE" },
    { identifier: "calldata", text: "CALLDATA"},
    { identifier: "input", text: "INPUT" },
];

const UserOpHash = () => {
    let { userOpHash } = useParams();
    const [userOp, setUserOp] = useState({});
    const [loading, setLoading] = useState(false);

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
                                {transactionDetailsMeta.map((txDetail) => {
                                    return (
                                        <>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <HelpOutlineIcon size="small" />
                                                </ListItemIcon>
                                                <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>{txDetail.Text}</ListItemText>
                                                <ListItemText>:</ListItemText>
                                                <ListItemText sx={{ width: "60%", wordWrap: "break-word" }}>
                                                    {userOp[txDetail.identifier] == true ? "TRUE" : userOp[txDetail.identifier]}
                                                </ListItemText>
                                            </ListItem>
                                        </>
                                    );
                                })}
                            </List>
                        </Container>
                        <Container sx={{ marginTop: "50px" }}>
                            <Typography variant="h4" align="left">
                                Developer Details
                            </Typography>
                            <List>
                                {developerDetailsMeta.map((devDetail) => {
                                    return (
                                        <>
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <HelpOutlineIcon size="small" />
                                                </ListItemIcon>
                                                <ListItemText sx={{ width: "25%", wordWrap: "break-word" }}>{devDetail.Text}</ListItemText>
                                                <ListItemText>:</ListItemText>
                                                <ListItemText sx={{ width: "60%", wordWrap: "break-word" }}>
                                                    {userOp[devDetail.identifier]}
                                                </ListItemText>
                                            </ListItem>
                                        </>
                                    );
                                })}
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
