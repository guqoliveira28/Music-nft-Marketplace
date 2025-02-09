import { Box } from '@mui/material';
import React from 'react';
import StreamingSideBar from './streamingSideBar/SteamingSideBar';
import LatestMusic from './latestMusic/LatestMusic';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ChartMusic from './chartMusic';
import GenreMusic from './genreMusic';

const Streaming = () => {
  const { userData } = useSelector(state => state.user);
  const [visible, setVisible] = useState('none');
  return (
    <>
      <div className="streamingContainer">
        {/* <Box sx={style.streamingSideBarContainer}>
            <StreamingSideBar />
          </Box> */}
        <LatestMusic userData={userData} func={setVisible} />
        {/* Popular song */}
        <ChartMusic userData={userData} func={setVisible} />
        {/* Mood and Genre */}
        <GenreMusic userData={userData} func={setVisible} />
        <Box sx={{ flexDirection: '' }}></Box>
      </div>
    </>
  );
};

export default Streaming;
