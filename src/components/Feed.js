import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchApi.js';
import { Sidebar, Videos, } from "./index.js";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchData(`search?part=snippet&q=${selectedCategory}`)
            .then(data => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ height: { xs: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
                    copyright 2022 @Raihan_tazdid
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }} >
                    {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;