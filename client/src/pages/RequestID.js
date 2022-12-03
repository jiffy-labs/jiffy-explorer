import { Col, Nav, Row } from "react-bootstrap";
import Header from "../components/Header";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Search from "../components/Search";


const columns = [
    { dataField: "requestId", text: "Request ID" },
    { dataField: "blockTime", text: "Age" },
    { dataField: "sender", text: "Sender" },
    { dataField: "blockNumber", text: "BlockNumber" },
    { dataField: "gasCost", text: "Gas Spent" },
    { dataField: "status", text: "Status" },
    { dataField: }
];

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