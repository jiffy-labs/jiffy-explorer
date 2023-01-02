import { Col, Nav, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Search from "../components/SearchBar";
import Layout from "../components/Layout";
import HomePageNavBar from "../components/HomePageNavBar";

// 66 characters - request ID
// 42 characters - address

const Home = () => {
    return (
        <>
            <HomePageNavBar />
            <main>
                <Layout />
            </main>
        </>
    );
};

export default Home;
