import { Box } from '@mui/system';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchApi';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetails = () => {
    const { id } = useParams();
    const [channelDetail, setChannleDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    console.log(videos)

    useEffect(() => {
        fetchData(`channels?part=snippet&id=${id}`)
            .then((data) => setChannleDetail(data?.items[0]))

        fetchData(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items))
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    backgroundImage: "linear-gradient(to left top, #9d1462, #9e207b, #993096, #8c41b1, #7452cc, #5c64d9, #3d73e1, #0081e7, #008edc, #0096c5, #009aac, #379b95)",
                    zIndex: '10', height: '280px'
                }}>
                </div>
                <div style={{ marginTop: '-130px' }}>
                    <ChannelCard channelDetail={channelDetail} />
                </div>
                <Box display="flex" p="2">
                    <Box sx={{ mr: { sm: '100px' } }} />
                    <Videos videos={videos} />

                </Box>
            </Box>
        </Box>
    );
};

export default ChannelDetails;