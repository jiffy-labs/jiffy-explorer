import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";
// import decodeInputData from "../utils/test";

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
} from "@mui/material";
import NavBar from "../components/NavBar";

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
            <Container sx={{ marginTop: "50px", backgroundColor: "white", width: "80%" }}>
                <Typography variant="h3">User Operation</Typography>
                <Typography variant="h6">User Operation Hash:</Typography>
                <Typography variant="body1">{userOp.userOpHash}</Typography>
                <Paper elevation={2}>
                    <Typography variant="h4" align="left">
                        Transaction Details
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography noWrap="true">BLOCK NUMBER</Typography>
                            <br />
                            <Typography noWrap="true">BLOCK TIME</Typography>
                            <br />
                            <Typography noWrap="true">TRANSACTION HASH</Typography>
                            <br />
                            <Typography noWrap="true">SENDER</Typography>
                            <br />
                            <Typography noWrap="true">TARGET</Typography>
                            <br />
                            <Typography noWrap="true">SUCCESS</Typography>
                            <br />
                            {userOp.success ? (
                                ""
                            ) : (
                                <>
                                    <Typography noWrap="true">REVERT REASON</Typography>
                                    <br />
                                </>
                            )}
                            FEE
                        </Grid>
                        <Grid item xs={9} sx={{ borderBottom: "5px" }}>
                            <Typography noWrap="true">{userOp.blockNumber}</Typography>

                            <Divider />
                            <Typography noWrap="true">{userOp.blockTime}</Typography>

                            <Divider />
                            <Typography noWrap="true">{userOp.transactionHash}</Typography>

                            <Divider />
                            <Typography noWrap="true">{userOp.sender}</Typography>

                            <Divider />
                            <Typography noWrap="true">{userOp.target}</Typography>

                            <Divider />
                            <Typography noWrap="true">{userOp.success ? "True" : "False"}</Typography>

                            <Divider />
                            <Typography sx={{ wordWrap: "break-word" }}>
                                {userOp.success ? (
                                    ""
                                ) : (
                                    <>
                                        <Typography noWrap="true"></Typography>
                                        {userOp.revertReason}
                                        <Divider />
                                    </>
                                )}
                            </Typography>

                            <Typography noWrap="true"></Typography>
                            {userOp.actualGasCost}
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation={2}>
                    <Typography variant="h4" align="left">
                        Developer Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sx={{ borderBottom: "5px" }}>
                            <Typography noWrap="true"></Typography>INPUT
                            <br />
                            <Typography noWrap="true"></Typography>ACTUAL GAS USED
                        </Grid>
                        <Grid item xs={9} sx={{ borderBottom: "5px" }}>
                            <Typography sx={{wordWrap: "break-word"}}>{userOp.input}</Typography>
                            <Divider />
                            <Typography >{userOp.actualGasUsed ? userOp.actualGasUsed : userOp.actualGasPrice}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};

export default UserOpHash;
