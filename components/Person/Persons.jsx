import PropTypes from "prop-types";
import Paper from '@mui/material/Paper';
import Person from "./Person";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Persons = ({ shoapi, deletePerson }) => {
    // sending information To Person
    return (
        <>
            <Box component="div"
                sx={{ display: "flex", justifyContent: "center", my: 12 }}>
                <TableContainer style={{ width: 1000 }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Information</TableCell>
                                <TableCell align="right">Fullname</TableCell>
                                <TableCell align="right">Sex</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Option</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shoapi.map((person) => (
                                <Person
                                    key={person.id}
                                    date={person.date}
                                    radio={person.radio}
                                    fullname={person.fullname}
                                    information={person.information}
                                    deleted={() => deletePerson(person._id)}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
};

export default Persons;
