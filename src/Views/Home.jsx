import React, { useState, useEffect } from 'react';
import { Router, Link } from '@gatsbyjs/reach-router';
import axios from 'axios';
import DrinkCards from '../components/DrinkCards';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import './Home.css'


const Home = (props) => {
    const [ingState, setIngState] = useState("");
    const [drinks, setDrinks] = useState(null);

    const ingOnChangeHandler = e => {
        setIngState(e.target.value);
    }

    async function formSubmitHandler(e, index) {
        e.preventDefault();
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingState}`)
            .then(res => {
                console.log(res.data);
                setDrinks(res.data, [index])
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <>
            <div className="drinks" style={{ backgroundColor: '#b69b7d', paddingTop: "3rem" }} >
                <Typography variant="h2" style={{ fontFamily: 'DM Serif Display', fontWeight: 600, color: 'white' }} sx={{ mr: 0 }}>Welcome to Mixr.</Typography>
                <Typography variant="h6" style={{ fontFamily: 'Montserrat', fontWeight: 400, color: 'white' }} sx={{ m: 0 }}>The one place for all of your mixed drink needs.</Typography>

                <form onSubmit={formSubmitHandler} style={{ marginTop: '2rem', marginLeft: "2rem", marginRight: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <TextField style={{ marginBottom: "3rem", fontColor: 'white' }} variant='outlined' label='Search Ingredient' name="ingredient" onChange={ingOnChangeHandler} />
                    &nbsp;
                    &nbsp;
                    <Button size='large' type='submit' variant='contained' style={{ height: '3.4rem', marginBottom: "3rem", color: '#e2e0d5', backgroundColor: '#222c3c', fontFamily: 'DM Serif Display', fontWeight: 1000 }}>GO</Button>
                </form>
            </div>
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                    drinks ?
                        drinks.drinks.map((drinks, index) => {

                            return <DrinkCards drinks={drinks} key={index} i={index} formSubmitHandler={formSubmitHandler} />
                        })

                        :
                        ""
                }
            </div>



        </>
    )
}

export default Home
