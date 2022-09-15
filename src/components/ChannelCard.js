import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {

    return (
        <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '350px', height: '326px', margin: 'auto' }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }} >
                    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ height: '200px', width: '200px', borderRadius: '50%', mb: 2, border: '3px solid #e3e3e3' }} > </CardMedia>
                    <Typography variant='h6'> {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 16, color: 'green', ml: '5px' }} />
                    </Typography>
                    {
                        channelDetail?.statistics?.subscriberCount && (
                            <Typography>
                                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                            </Typography>
                        )
                    }
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;