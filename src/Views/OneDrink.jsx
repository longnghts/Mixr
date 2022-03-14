import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';





const OneDrink = (props) => {

    const [drinkData, setDrinkData] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.drinkID}`)
                .then(res => {
                    setDrinkData(res.data.drinks);
                })
                .catch(err => console.error(err));
        }, 1500)
    }, [])


    return (
        <>
            {
                drinkData ?
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '75vh', alignItems: 'center' }}>
                        <Card sx={{ width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant='outlined'>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                {/* <img style={{ maxWidth: '400px' }} src={drinkData[0].strDrinkThumb} alt="yee" /> */}
                                <Card sx={{ width: '30vw', minHeight: '30vw' }}>
                                    <CardMedia
                                        component="img"
                                        height="55%"
                                        image={drinkData[0].strDrinkThumb}
                                    />
                                    <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, height: '45%' }}>
                                        <Typography variant="body2" color="text.secondary" style={{ margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                                            {
                                                drinkData[0].strIngredient1 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient1} variant='outlined' />
                                                    :
                                                    ''

                                            }
                                            {
                                                drinkData[0].strIngredient2 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient2} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient3 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient3} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient4 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient4} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient5 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient5} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient6 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient6} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient7 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient7} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient8 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient8} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient9 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient9} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient10 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient10} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient11 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient11} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient12 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient12} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient13 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient13} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient14 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient14} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                            {
                                                drinkData[0].strIngredient15 ?
                                                    <Chip size='small' style={{ margin: '.2vw', fontFamily: 'Montserrat', fontWeight: '500' }} label={drinkData[0].strIngredient15} variant='outlined' />
                                                    :
                                                    ''
                                            }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap', width: '100%', height: '100%' }}>
                                <Typography variant="h5" align="start" paddingLeft='25px' style={{
                                    fontFamily: 'DM Serif Display', fontWeight: 600, color: 'black'
                                }} sx={{ mr: 0 }}>
                                    {drinkData[0].strDrink}
                                </Typography>
                                <Typography variant="body" align="start" paddingLeft='50px' paddingRight='50px' style={{ fontFamily: 'Montserrat' }}>
                                    {drinkData[0].strInstructions}
                                </Typography>


                            </div>
                        </Card>
                    </div>
                    :
                    <div>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
                            <CircularProgress />
                        </Box>
                    </div>
            }
        </>
    )
}
export default OneDrink