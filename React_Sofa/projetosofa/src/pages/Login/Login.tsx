import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Login.css';
import { TextField, Typography, Link, Button } from '@material-ui/core';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>
                            Entrar
                        </Typography>
                        <TextField id='usuario' label='Usuario' variant='outlined' name= 'usuario' margin= 'normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name= 'senha' margin= 'normal' type= 'password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link href='/home' className='text-decoration-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>  
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>   
                        <Box marginRight={2}>
                            <Typography variant='subtitle1' gutterBottom align='center'>
                                Cadastre-se agora:
                            </Typography>
                        </Box>
                        <Button href='/Cadastro' className='loq' variant="text" style={{fontWeight:'bold'}}>Cadastrar</Button>

                    </Box>
                </Box>
            </Grid>
            <Grid xs= {6} style={{
                backgroundImage: `url(https://www.spzonline.com.br/cache/sofa-novo-quatro-tendencias-que-estao-em-alta-no-decor-1280x720.webp)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    );           
    

}

export default Login;