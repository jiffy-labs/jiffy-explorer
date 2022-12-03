import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Address from "./pages/Address";
import Block from "./pages/Block";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/address/:address" element={<Address />} />
                    <Route path="/block/:block" element={<Block />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
