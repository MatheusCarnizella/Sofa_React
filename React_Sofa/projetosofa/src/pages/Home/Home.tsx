import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './Home.css';

function Home() {
    return (
        <Grid>
            <Box>
                <img width='100%' src="https://a-static.mlcdn.com.br/1500x1500/sofa-madri-192-super-conforto-buriti-estofados/lavinaestofado/15897026521/ce48e71e8881542354bce4ec00ef7f26.jpg" alt="" />
            </Box>
            <Box style={{ height: '50vh' }}>
                <Typography align='center' fontSize={50}>BEM-VINDO AO SITE DE SOFÁS</Typography>
                <Typography align='center' fontSize={30}>Com o melhor site para você</Typography>
                <Box>
                    <Button href='/Sofas' className='fator' variant="contained">Ver sofás</Button>
                </Box>
            </Box>
            
            
        </Grid>


    );
}


export default Home;