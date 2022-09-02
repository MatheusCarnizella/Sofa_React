import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from '@material-ui/core';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Teste do Sofá
                            <Button className='tol' href='/Sofas' color="inherit">Sofás</Button>
                            <Button className='tol2' href='/Cadastro' color="inherit">Laudos</Button>
                        </Typography>
                        <Button href='/Cadastro' color="inherit">Entrar / Registrar</Button>
                        <Button href='/Login' color="inherit">Sair</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}


export default Navbar;