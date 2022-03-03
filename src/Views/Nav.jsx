import React from 'react';
import './Nav.css';
import { Router, Link } from '@gatsbyjs/reach-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'
import { CssBaseline } from '@mui/material';




const Nav = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="static" style={{ backgroundColor: '#222c3c' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{}}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" color="inherit" component="div" align="center">
                            <Link to='/' style={{ textDecoration: 'none', color: 'white', fontFamily: 'DM Serif Display', fontWeight: 900, fontSize: '35px' }}>Mixr</Link>
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="p" color="inherit" component="div" align="center">
                            <Link to="/about" style={{ textDecoration: 'none', fontFamily: "DM Serif Display", fontWeight: 900, color: 'white' }}>about</Link>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Link to="/facts" style={{ textDecoration: 'none', color: 'white', fontFamily: 'DM Serif Display', fontWeight: 900 }}>facts</Link>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Nav