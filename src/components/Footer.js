import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' backgroundColor="rgb(254, 99, 99)">
            <Typography color='white' variant='body2'> &copy; Raihan Tazdid </Typography>
            <a href="https://github.com/raihan-tajdid007" target='_blank' rel="noreferrer">
                <Button sx={{ color: 'white', fontSize: '10px', marginX: '30px' }} > Visit my github</Button>
            </a>
            <a href="https://www.linkedin.com/in/raihan-tazdid/" target='_blank' rel="noreferrer">
                <Button size='small' sx={{ color: 'white', fontSize: '10px' }} > Visit my Linkedin</Button>
            </a>
        </Box>
    );
};

export default Footer;