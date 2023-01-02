import {
  Box,
  Heading,
  Input,
  InputGroup,
  Text,
  Link,
  Flex,
  Container,
  Spacer,
} from "@chakra-ui/react";

import Search from "./SearchBar";

import { BiSearchAlt } from "react-icons/fa";

const LinkLayout = ({ children }) => (
  <>
    <Flex mt="50px" pl="120px" pr="120px" pt="20px" pb="25px" bg="#f4f4f4">
      <Box>
        <Heading as="h1" textAlign="center" fontSize="7xl" color="#502eb4">
          <Link href="/">ji<span>ƒƒ</span>yscan</Link>
        </Heading>
        <Text fontSize="xs" textAlign="center" mt="5px" color="#502eb4">
        account abstracted transactions explorer for{" "}
        <Link href="https://eips.ethereum.org/EIPS/eip-4337">EIP-4337</Link>
        </Text>
      </Box>

      <Spacer />
      <Box>
        <Search  />
      </Box>
    </Flex>
    <Box ml="100px" mr="100px" mt="50px">
      {children}
    </Box>
    {/* <Container minWidth="100%">{children}</Container> */}
  </>
);

export default LinkLayout;