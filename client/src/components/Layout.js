import { styled, alpha } from "@mui/material/styles";
import { AppBar, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import Search from "./SearchBar";
import { background, theme } from "@chakra-ui/react";

const Layout = () => (
    <div>
        <Container maxWidth="md" sx={{ marginTop: "50px", backgroundColor: "background.paper", padding: "spacing(8, 0, 6)" }}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Jiffy Scan
            </Typography>
            <Typography sx={{ marginBottom: "50px" }} variant="h5" align="center" color="textSecondary" paragraph>
                User Op explorer for <a target="_blank" href="https://eips.ethereum.org/EIPS/eip-4337">EIP-4337</a>
            </Typography>
            <div sx={{ marginTop: "40px" }}>
                <Search></Search>
            </div>
        </Container>
    </div>
);

export default Layout;
