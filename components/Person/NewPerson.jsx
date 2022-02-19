import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormControl, Radio, RadioGroup } from "@material-ui/core";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FormControlLabel, TextField, } from "@mui/material";


// style border 
const commonStyles = {
    bgcolor: 'background.paper',
    border: 3,
    borderColor: 'primary.main',
    width: '35rem',
    height: '30rem',
};
const NewPerson = ({ setPerson, newPerson, person, information, setInformation, radio }) => {
    // handle formBox
    return (
        <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center", my: 12 }}
        >
            <Box sx={{ ...commonStyles, borderTop: 0 }}>
                {/* handle create new person */}
                <form onSubmit={event => event.preventDefault()}>
                    <Box component="div" sx={{ display: "grid", p: 2 }}>
                        <FormControl>
                            <TextField
                                id="standard-basic"
                                name="fullName"
                                label="Full Name"
                                variant="standard"
                                style={{ marginTop: "50px" }}
                                onChange={setPerson}
                                value={person}
                            />
                            <TextareaAutosize
                                aria-label="minimum height"
                                label="Information"
                                minRows={3}
                                placeholder="Information"
                                style={{ marginTop: "50px" }}
                                onChange={setInformation}
                                value={information}
                            />
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue=""
                                onChange={radio}
                                name="radio-buttons-group"
                                style={{ display: "block", marginTop: "50px" }}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"

                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio />}
                                    label="Other"

                                />
                            </RadioGroup>
                            <div>
                                <Button variant="contained"
                                    style={{ marginTop: "50px", width: 100 }}
                                    onClick={newPerson}>Submit</Button>
                            </div>
                        </FormControl>
                    </Box>
                </form >
            </Box >
        </Box>
    );
};

export default NewPerson;
