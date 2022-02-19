import { useState } from "react"
import PropTypes from "prop-types";
import { Button, Dialog, DialogActions, DialogTitle, TableCell, TableRow } from "@mui/material";


const Person = ({ fullname, deleted, information, date, radio, key }) => {
        // handle open / close exits
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => {
                setOpen(true);
        };
        const handleClose = () => {
                setOpen(false);
        };
        // handle space between words
        const name = fullname.split('').join(' ')
        // handle new form Date
        const DateCreate = date.slice(0, 10)
        // error handleing
        const error = "You did not enter any"
        // handle showTable
        return (
                <>
                        <TableRow key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                                <TableCell component="th" scope="row">
                                        {information === "" ? error : information}
                                </TableCell>
                                <TableCell align="right">{name === "" ? error : name}</TableCell>
                                <TableCell align="right">{radio === "" ? error : radio}</TableCell>
                                <TableCell align="right">{DateCreate}</TableCell>
                                <TableCell align="right"><Button variant="outlined" color="error" onClick={handleClickOpen}>click</Button></TableCell>
                        </TableRow>
                        {/* handle alert message */}
                        <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                        >
                                <DialogTitle id="alert-dialog-title">
                                        {"Are you sure you want to delete?"}
                                </DialogTitle>
                                <DialogActions>
                                        <Button onClick={handleClose} variant="outlined" color="success">Disagree</Button>
                                        <Button onClick={deleted} variant="outlined" color="error" autoFocus>Agree</Button>
                                </DialogActions>
                        </Dialog>
                </>
        )
};

Person.propTypes = {
        fullname: PropTypes.string,
        information: PropTypes.string,
        radio: PropTypes.string,
        deleted: PropTypes.func
};

export default Person;
