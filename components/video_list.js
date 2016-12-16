import React,{Component} from 'react';
import VideoListItem from './video_list_item';
const VideoList=({videos})=>{
    const videoItems=videos.map((video)=>{
       return <VideoListItem video={video} key={video.id.videoId} />
    });
	return(
		<div>
			<ul>{videoItems}
			</ul>
		</div>
	);
};

export default VideoList;