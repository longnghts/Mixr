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

const DrinkCards = (props) => {

    const [drinkLong, setDrinkLong] = useState([]);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.drinks.idDrink}`)
            .then(res => {
                console.log(res.data.drinks);
                setDrinkLong(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    console.log(drinkLong.drinks);
    return (
        <div>
            <Card sx={{ maxWidth: 600, mx: "3vw", my: "3vw" }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={props.drinks.strDrinkThumb}
                    alt={props.drinks.strDrink}
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="div" style={{ fontFamily: 'Montserrat', fontWeight: 800 }}>
                        {props.drinks.strDrink}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {drinkLong}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to='' style={{ textDecoration: 'none' }}><Button sx={{ mx: '2rem', marginBottom: '1rem' }} style={{ height: '2rem', width: '9rem', color: '#e2e0d5', backgroundColor: '#222c3c', fontFamily: 'DM Serif Display', fontWeight: 1000, underline: false }} variant="contained" size="large">Details</Button></Link>
                </CardActions>
            </Card>
            {/* <button></button> */}
            <button>{props.drinks.idDrink}</button>
        </div>
    );
}

export default DrinkCards





