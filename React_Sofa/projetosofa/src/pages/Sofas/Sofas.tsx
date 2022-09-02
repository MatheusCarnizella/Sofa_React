import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { CardActionArea } from '@mui/material';
import './Sofas.css'

function Sofas() {
    return (
        <Grid >
            <Box>
                <Typography align='center' fontSize={50}>Veja nossos sofas a baixo</Typography>
            </Box >
            <Grid justifyContent='flex-start'>
                <Box paddingX={20}>
                    <Typography align='center'>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://s2.glbimg.com/cvKRNl545h80tuDYmc23rkhd2jY=/e.glbimg.com/og/ed/f/original/2021/04/01/sofa_retratil_abre.png"
                                        alt="Sofa 2 lugares"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sofa 2 Lugares
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            2 Lugares,
                                            Altura: 87 cm,
                                            Largura: 180 cm,
                                            Profundidade: 126 cm,
                                            Peso: 33,5 kg,
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://s2.glbimg.com/cvKRNl545h80tuDYmc23rkhd2jY=/e.glbimg.com/og/ed/f/original/2021/04/01/sofa_retratil_abre.png"
                                    alt="Sofa 2 lugares"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Sofa 2 Lugares
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        2 Lugares,
                                        Altura: 87 cm,
                                        Largura: 180 cm,
                                        Profundidade: 126 cm,
                                        Peso: 33,5 kg,
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://s2.glbimg.com/cvKRNl545h80tuDYmc23rkhd2jY=/e.glbimg.com/og/ed/f/original/2021/04/01/sofa_retratil_abre.png"
                                    alt="Sofa 2 lugares"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Sofa 2 Lugares
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        2 Lugares,
                                        Altura: 87 cm,
                                        Largura: 180 cm,
                                        Profundidade: 126 cm,
                                        Peso: 33,5 kg,
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Typography>
                    <Grid alignItems='center' >
                        <Box padding={10} display='flex' justifyContent='center'>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Box>
                    </Grid>
                </Box>
            </Grid>

        </Grid >

    );
}

export default Sofas;