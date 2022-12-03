import { Box, Container, Heading, Text, Link } from "@chakra-ui/react";

import Search from "./Search";

const Layout = () => (
  <Container minWidth="100%" centerContent>
    <Box maxW="2xl" m="0 auto">
      <Heading as="h1" color="indigo" textAlign="center" fontSize="9xl" mt="100px" mb="50px">
        ji<span>ƒƒ</span>y-scan
        {/* blöbscan */}
      </Heading>
      <Search></Search>
      <Text fontSize="xl" textAlign="center" mt="30px">
        account abstracted transactions explorer for{" "}
        <Link href="https://eips.ethereum.org/EIPS/eip-4337">EIP-4337</Link>
      </Text>
    </Box>
  </Container>
);

export default Layout;