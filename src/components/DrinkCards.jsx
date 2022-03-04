import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Router, Link } from '@gatsbyjs/reach-router';
import { blue } from '@mui/material/colors';

const DrinkCards = ({ drinks, formSubmitHandler, i, drinkLong }) => {



    return (
        <div>
            {/* This is the card component. change image, alt. line 44 is the actual body text of the card, line 42 is the title of the card */}
            <Card sx={{ width: '25vw', mx: "3vw", my: "3vw" }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={drinks.strDrinkThumb}
                    alt={drinks.strDrink}
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="div" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
                        {drinks.strDrink}{/*title of the card, supposed to be the name of the drink */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/* {drinkLong.strInstructions}The body of the card, supposed to be the description/recipe of the drink */}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to={`/${drinks.idDrink}`} style={{ textDecoration: 'none' }}><Button sx={{ mx: '2rem', marginBottom: '1rem' }} style={{ height: '2rem', width: '9rem', color: '#e2e0d5', backgroundColor: '#222c3c', fontFamily: 'DM Serif Display', fontWeight: 1000, underline: false }} variant="contained" size="large">Details</Button></Link>
                </CardActions>
            </Card>
        </div>
    );
}

export default DrinkCards
