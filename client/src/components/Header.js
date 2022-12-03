import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

function Header() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Jiffy Explorer</Navbar.Brand>
        </Navbar>
    );
}

export default Header;
