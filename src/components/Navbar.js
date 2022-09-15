import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import navlogo from '../utils/youtube.png'

const Navbar = () => {
    return (
        <Stack direction='row' alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }} >

            <Link to='/' style={{ display: 'flex', alignItems: 'center', marginLeft: '18px' }}>
                <img src={navlogo} alt="LOGO" height={45} width={70} />
            </Link>
            <Searchbar />

        </Stack>
    );
};

export default Navbar;