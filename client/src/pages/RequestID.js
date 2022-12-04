import LinkLayout from "../components/LinkingLayout";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Search from "../components/Search";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import {useEffect, useState} from "react";
import decodeInputData from "../utils/test";

import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

// const columns = [
//     { dataField: "requestId", text: "Request ID" },
//     { dataField: "blockTime", text: "Age" },
//     { dataField: "sender", text: "Sender" },
//     { dataField: "blockNumber", text: "BlockNumber" },
//     { dataField: "gasCost", text: "Gas Spent" },
//     { dataField: "status", text: "Status" },
//     { dataField: }
// ];

let REQUESTID_QUERY = `
    {
        userOps(where: { requestId: "REQUEST_ID" }, first: 1) {
            paymaster
            nonce
            transactionHash
            success
            sender
            revertReason
            requestId
            actualGasCost
            actualGasPrice
            blockTime
            blockNumber
        }
    }
`;

const RequestId = () => {
    let { reqId } = useParams();
    const { data, loading, error } = useQuery(gql(REQUESTID_QUERY.replace("REQUEST_ID", reqId)));
    const [calldata, setCalldata] = useState("")

    // useEffect(() => {
    //     if(!data?.userOps) return;
    //     fetch("/getTransactionInput?network=goerli&txHash="+data.userOps[0].transactionHash).then((res) => {
    //         console.log(JSON.parse(res.body));
    //     })
    // },[data])

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    if (!data.userOps) return "Error...";
    let userOp = data.userOps[0];

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
                                <Th>RequestId</Th>
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
                                <Td>Georli</Td>
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
                                <Td>0x468721a700000000000000000000000040a2accbd92bca938b02010e17a5b8929b49130d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000001848d80ff0a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000013200faaffdcbf13f879ea5d5594c4aebce0f5de733ca00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044095ea7b300000000000000000000000083dac8e36d8fdecf69cd78f9f86f25664eee72f40000000000000000000000000000000000000000000000000005b850ef95800000faaffdcbf13f879ea5d5594c4aebce0f5de733ca00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044a9059cbb000000000000000000000000fd50b031e778fab33dfd2fc3ca66a1eef065216500000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
</Td>
                            </Tr>
                            <Tr>
                                <Th><a href={"https://goerli.etherscan.io/tx/"+userOp.transactionHash}>Etherscan</a></Th>
                                <Th><a href={"https://dashboard.tenderly.co/tx/goerli/"+userOp.transactionHash}>Tenderly</a></Th>
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
