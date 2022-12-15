import LinkLayout from "../components/LinkingLayout";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import decodeInputData from "../utils/test";

import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, HStack, Box } from "@chakra-ui/react";

const RequestId = () => {
    let { reqId } = useParams();
    const [userOp, setUserOp] = useState({});
    const [loading, setLoading] = useState(false);
    const [userOpData, setUserOpData] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch("/api/getUserOpInfo?userOpHash=" + reqId).then((res) =>
            res.json().then((userOp) => {
                if (userOp.error) return <pre>{userOp.message}</pre>;
                setUserOp(userOp);
                setLoading(false);
            })
        );
    }, []);

    useEffect(() => {
        if (Object.keys(userOp).length == 0) return;
        fetch(
            "/getTransactionInput?network="+userOp.network+"&txHash=" + userOp.transactionHash + "&sender=" + userOp.sender + "&nonce=" + userOp.nonce
        ).then((res) => {
            res.json().then((userOpData) => setUserOpData(userOpData));
        });
    }, [userOp]);

    if (loading) return "Loading...";

    return (
        <>
            <LinkLayout>
                <Container>
                    <TableContainer>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Type</Th>
                                    <Th>Value</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>UserOpHash</Th>
                                    <Td>{userOp.requestId}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Transaction Hash</Th>
                                    <Td>{userOp.transactionHash}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Sender</Th>
                                    <Td>{userOp.sender}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Nonce</Th>
                                    <Td>{userOp.nonce}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Paymaster</Th>
                                    <Td>{userOp.paymaster}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Target</Th>
                                    <Td>{userOpData.target}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Actual Gas Cost</Th>
                                    <Td>{(userOp.actualGasCost / 10 ** 18).toFixed(6)}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Actual Gas Price</Th>
                                    <Td>{userOp.actualGasPrice}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Block Number</Th>
                                    <Td>{userOp.blockNumber}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Network</Th>
                                    <Td>{userOp.network}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Status</Th>
                                    <Td>{userOp.success ? "Success" : "Reverted"}</Td>
                                </Tr>
                                {userOp.success ?? (
                                    <Tr>
                                        <Th>Revert Message</Th>
                                        <Td>{userOp.revertMessage}</Td>
                                    </Tr>
                                )}
                                <Tr>
                                    <Th>Calldata</Th>
                                    <Td w="500px">{userOpData.callData}</Td>
                                </Tr>
                                <Tr>
                                    <Th>
                                        <a href={"https://goerli.etherscan.io/tx/" + userOp.transactionHash}>Etherscan</a>
                                    </Th>
                                    <Th>
                                        <a href={"https://dashboard.tenderly.co/tx/goerli/" + userOp.transactionHash}>Tenderly</a>
                                    </Th>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Container>
            </LinkLayout>
        </>
    );
};

export default RequestId;
