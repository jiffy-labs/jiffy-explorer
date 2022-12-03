import { Col, Nav, Row } from "react-bootstrap";
import Header from "../components/Header";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Search from "../components/Search";


// 66 characters - request ID 
// 42 characters - address

const Home = () => {
    return (
        <>
            <Header />
            <div className="wrapp">
                <div className="content">
                    <Search/>
                </div>
            </div>
        </>
    );
};

export default Home;
