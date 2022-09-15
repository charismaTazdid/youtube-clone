import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchData } from '../utils/fetchApi.js';
import { Videos } from "./index.js";
import { useParams } from 'react-router-dom';
const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const { serchTerm } = useParams();

    useEffect(() => {
        fetchData(`search?part=snippet&q=${serchTerm}`)
            .then(data => setVideos(data.items))
    }, [serchTerm]);

    return (
        <Box p={2} minHeight="95vh">
            <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
                Search Results for <span style={{ color: "#FC1503" }}>{serchTerm}</span>
            </Typography>
            <Box display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                {<Videos videos={videos} />}
            </Box>
        </Box>

    );
};

export default SearchFeed;