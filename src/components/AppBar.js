import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
                        Watch List
                    </Typography>
                </Toolbar>
                <Typography sx={{ marginLeft: "1.5rem", marginBottom: "0.5rem" }}>
                    What you want to watch, what you loved, and what you never want to see again.
                </Typography>
            </AppBar>
        </Box>
    );
}
