import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons';
import './Footer'

function Footer() {
    return (
        <Box style={{ backgroundColor: "#3F51B5" }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Criado por Matheus Carnizella
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box display="flex" alignItems="center" justifyContent="center">
                <a href="#" target="_blank">
                    <GitHub style={{ fontSize: 52, color: "white" }} />
                </a>
                <a href="#" target="_blank">
                    <Instagram style={{ fontSize: 60, color: "white" }} />
                </a>
                <a href="#" target="_blank">
                    <LinkedIn style={{ fontSize: 60, color: "white" }} />
                </a>
            </Box>
        </Box>
    );
}


export default Footer;