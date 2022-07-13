import React from 'react';
import List from '@mui/material/List';
import AudioListItem from './AudioListItem';

const AudioList = ({audioData, onAudioClick}) => {

    const audioList = audioData.map((audio) => {
        return  <AudioListItem 
        audio={audio} 
        key={audio.id} 
        onAudioClick={onAudioClick}
        />
        })

    return(
        <>
    <List
        sx={{
            width: '100%',
            maxWidth: 300,
            // bgcolor: '#000000',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 60,
            '& ul': { padding: 0 },
        }}
        subheader={<li />}
    >
        {
        <ul>
            {audioList} 
        </ul>
        }
    </List>

        </>
    )
}

export default AudioList