import React from "react";
import { Paper, Container, Box, Typography, TableContainer, Table, TableBody, TableCell, TableRow, TableHead } from "@mui/material";

function TransactionTable({ rows, columns }) {
    return (
        <TableContainer component={Paper}>
            <Typography variant="h6" align="center">
                Transactions
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell align="Left">{col.text}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell>{row[col.dataField]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TransactionTable;
