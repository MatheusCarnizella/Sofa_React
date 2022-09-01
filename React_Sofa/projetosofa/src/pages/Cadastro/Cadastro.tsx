import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Typography, Link, Button } from '@material-ui/core';


function Cadastro() {
    
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>
                            Entrar
                        </Typography>
                        <TextField id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmesenha' label='Confrimar a senha' variant='outlined' name='confirmesenha' margin='normal' type='password' fullWidth />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tipo do Usuario</InputLabel>
                            <Select>
                                <MenuItem value={10}>Usuario</MenuItem>
                                <MenuItem value={20}>Inspetor</MenuItem>

                            </Select>
                        </FormControl>
                        <Box marginTop={2} textAlign='center'>
                            <Link href='/Login' className='text-decoration-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://www.spzonline.com.br/cache/sofa-novo-quatro-tendencias-que-estao-em-alta-no-decor-1280x720.webp)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    );


}

export default Cadastro()