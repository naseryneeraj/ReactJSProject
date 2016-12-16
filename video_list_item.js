import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const VideoListItem= ({video,key})=>{
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li id={key} onClick={this.props.selectedVideo = {video}}>
            <img src={imageUrl}/>
        </li>
    );
};

export default VideoListItem;
