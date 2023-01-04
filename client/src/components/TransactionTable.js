import React from "react";
import { Paper, Container, Box, Typography, TableContainer, Table, TableBody, TableCell, TableRow, TableHead } from "@mui/material";

function TransactionTable({ rows, columns, tableAlign, tableTitle }) {
    return (
        <TableContainer component={Paper}>
            <Typography variant="h6" align={tableAlign}>
                {tableTitle}
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
