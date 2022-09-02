import React, { useState, useEffect, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { api, login } from '../../services/Services';
import { useNavigate, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import { TextField, Typography, Link, Button } from '@material-ui/core';

function Login() {
    let navigate = useNavigate();


    const [token, setToken] = useLocalStorage('token');

    const [UserLogin, setUser] = useState<UserLogin>(
        {
            email: '',
            senha: ''
        }
    )
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...UserLogin,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();  
        
        try {
            await login(`/api/AUsuarios/logar`, UserLogin, setToken);
            toast.info("Login realizado com sucesso!", {
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                type: "success",
                theme: "colored"

            });
        }catch (error) {
            toast.error("Email ou senha incorretos, verifique e tente novamente!", {
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                type: "error",
                theme: "colored"

            });
        }
    }
    useEffect(() => {
        if (token !== '') {
            navigate('/Home');
        }
    }, [token, navigate]);       

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>
                            Entrar
                        </Typography>
                        <TextField value={UserLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name= 'email' margin= 'normal' fullWidth />
                        <TextField value={UserLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name= 'senha' margin= 'normal' type= 'password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>  
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