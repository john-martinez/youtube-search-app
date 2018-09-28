import React from 'react'
import VideoListItem from './video-list-item'
import '../video-list.css'

const VideoList = (props) => {

    return (
        <ul className="video-list">
            {props.videos.map(video=>{
                return  <VideoListItem key={video.etag} video={video} onClickVideo={props.onClickVideo}/>
            })}
        </ul>
    )
}   

export default VideoList;