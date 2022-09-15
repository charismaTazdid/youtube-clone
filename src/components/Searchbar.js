import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Searchbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/search/${search}`);
            setSearch('')
        }
    };

    return (
        <Paper component='form' onSubmit={handleSubmit} sx={{ borderRadius: 20, border: '1.5px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}>

            <input className='search-bar' placeholder='Search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Searchbar;