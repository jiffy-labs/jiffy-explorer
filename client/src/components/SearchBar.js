import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { TextField, IconButton } from "@mui/material";

import { SearchOutlined } from "@mui/icons-material";

const SearchBar = ({ noButton }) => {
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => setTerm(e.target.value);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    };

    const handleSubmit = async () => {
        let searchTerm = term.trim();
        if (searchTerm.length == 42) {
            // This is an address
            navigate("/address/" + searchTerm);
        } else if (searchTerm.length == 66) {
            // This is request ID
            navigate("/userOpHash/" + searchTerm);
        } else if (searchTerm.length == parseInt(searchTerm).toString().length && parseInt(searchTerm) < 99999999) {
            navigate("/block/" + searchTerm);
        } else {
            return "Error...";
        }
    };

    return (
        // <Container>
        // <InputGroup size="lg" mt="30px">
        //   <form onSubmit={handleSubmit}>
        //     <Input
        //
        //       width="lg"
        //       focusBorderColor="#502eb4"
        //       placeholder=""
        //       variant="filled"
        //       _placeholder={{ opacity: 0.4, color: "#502eb4" }}
        //     />
        //     <InputRightElement width="4.5rem" mr={"1rem"}>
        //       {noButton ? null : (
        //         <Button h="1.75rem" size="sm" type="submit" mb="8px">
        //           <Search2Icon w={5} h={5} color="purple.800" />
        //         </Button>
        //       )}
        //     </InputRightElement>
        //   </form>
        // </InputGroup>
        // </Container>

        <TextField
            fullWidth
            id="standard-bare"
            variant="outlined"
            placeholder="Search by block number,adress hash or userOp hash"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            InputProps={{
                endAdornment: (
                    <IconButton onClick={handleSubmit}>
                        <SearchOutlined />
                    </IconButton>
                ),
            }}
        />
    );
};

export default SearchBar;
