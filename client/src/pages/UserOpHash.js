import LinkLayout from "../components/LinkingLayout";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {ethers, BigNumber} from "ethers";
// import decodeInputData from "../utils/test";

import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, HStack, Box } from "@chakra-ui/react";

let abiCoder = new ethers.utils.AbiCoder()
let userOpsParams = ["tuple(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]","address"]


const getTarget = (network, calldata, sender, nonce) => {
    if (network != "mumbai") return ""

    const decodedInput = abiCoder.decode(userOpsParams, "0x"+calldata.slice(10))
    if (decodedInput==null) return ""
    for(let userOpIdx in decodedInput[0]) {
        let userOp = decodedInput[0][userOpIdx]
        if (sender.toLowerCase() == userOp[0].toLowerCase() && nonce.toString() == userOp[1].toString() ){
            return  "0x"+userOp[3].slice(34,74)
        }
    }
}

const UserOpHash = () => {
    let { userOpHash } = useParams();
    const [userOp, setUserOp] = useState({});
    const [loading, setLoading] = useState(false);
    const [target, setTarget] = useState("");

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
        setTarget(getTarget(userOp.network,userOp.input,userOp.sender,userOp.nonce))
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
                                    <Td>{userOp.userOpHash}</Td>
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
                                    <Td>{target}</Td>
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

export default UserOpHash;
