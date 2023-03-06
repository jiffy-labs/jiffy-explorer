import React from "react";
import {
    Paper,
    Container,
    Box,
    Typography,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    Pagination,
} from "@mui/material";

function TransactionTable({ rows, columns, tableAlign, tableTitle }) {
    const [page, setPage] = React.useState(1);
    const [count, setCount] = React.useState(1);
    const [displayRows, setDisplayRows] = React.useState(rows.slice(0,10))
    const handleChange = (event, value) => {
        setPage(value);
    };

    React.useEffect(() => {
        setDisplayRows(rows)
        if(rows.length != 0)
            setCount(rows.length/10)
    },[rows])


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
                    {displayRows.map((row) => (
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell>{row[col.dataField]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div style={{ justifyContent: "center", display: "flex" }}>
                <Pagination count={count} page={page} onChange={handleChange} />
            </div>
        </TableContainer>
    );
}

export default TransactionTable;
