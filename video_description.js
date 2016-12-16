import React, {Component} from 'react';

const VideoDesc = ({video}) =>{
    if (video) {
        const vidDescr = video.snippet.description;
        const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div>
                <iframe src={videoUrl}/>
                <div>{vidDescr}</div>

            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }

};

export default VideoDesc;