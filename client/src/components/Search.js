
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Enter requestId, address or block" />
                <Button id="search">Search</Button>
            </InputGroup>
        </>
    );
};

export default Search;
