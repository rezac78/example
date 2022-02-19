import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Header = ({ persons }) => {
    // handle header & Count the number of data stored
    return (
        <Box component="div" sx={{ display: "flex", justifyContent: "center", my: 1, bgcolor: 'primary.main' }}>
            <div>
                <Typography sx={{ color: 'text.secondary' }} variant="h2" component="h2" gutterBottom>
                    Person Information
                </Typography>
                <Typography sx={{ color: 'text.primary' }} style={{ textAlign: 'center' }} variant="h5" component="h5" gutterBottom>
                    data saving: {persons.length}
                </Typography>
            </div>
        </Box>
    );
};

export default Header;
