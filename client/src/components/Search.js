
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { Container } from "react-bootstrap";

const Search = ({ noButton }) => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setTerm(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let searchTerm = term.trim();
    if (searchTerm.length == 42) { // This is an address
        navigate('/address/'+searchTerm);
    } else if (searchTerm.length == 66) { // This is request ID
        navigate('/userOpHash/'+searchTerm);
    } else if (searchTerm.length == parseInt(searchTerm).toString().length && parseInt(searchTerm) < 99999999) {
        navigate('/block/'+searchTerm)
    } else {
        return "Error..."
    }
  };

  return (
    <Container>
    <InputGroup size="lg" mt="30px">
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          width="lg"
          focusBorderColor="#502eb4"
          placeholder="Search by block/adress Hash or userOp hash"
          variant="filled"
          _placeholder={{ opacity: 0.4, color: "#502eb4" }}
        />
        <InputRightElement width="4.5rem" mr={"1rem"}>
          {noButton ? null : (
            <Button h="1.75rem" size="sm" type="submit" mb="8px">
              <Search2Icon w={5} h={5} color="purple.800" />
            </Button>
          )}
        </InputRightElement>
      </form>
    </InputGroup>
    </Container>
  );
};

export default Search;
