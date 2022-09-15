import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchApi';
import Videos from './Videos';

const VideoDetails = () => {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        fetchData(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))

        fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then(data => setRelatedVideos(data.items))
    }, [id]);

    if (!videoDetail) return 'LOADING....'
    const { snippet: { title, channelId, channelTitle }, statistics: { likeCount, viewCount } } = videoDetail;


    return (
        <Box minHeight='95vh'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '90px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2} >
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff" fontWeight="bold">
                                    {channelTitle}
                                    <CheckCircle sx={{ color: 'green', fontSize: '15px', ml: '8px' }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems='center'>
                                <Typography variant='body1' color="white" sx={{ opacity: '0.7' }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant='body1' color="white" sx={{ opacity: '0.7' }}>
                                    {parseInt(likeCount).toLocaleString()} Likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>


                {/* related videos */}
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
                    <Videos videos={relatedVideos} direction="column" />
                </Box>
            </Stack>


        </Box>
    );
};

export default VideoDetails;