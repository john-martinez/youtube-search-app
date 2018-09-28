import React from 'react'
import '../video-list-item.css'

const VideoListItem = ({video, onClickVideo})=>{
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="video-list-item"
            onClick = {()=> onClickVideo(video)} >
            
            
           <div className="img-container"><img src={imageUrl} alt="thumbnail"/> </div>
           <div className="video-list-item-description">
               <h4> {video.snippet.title} </h4>
               <p>{video.snippet.description}</p>
           </div>
        </li>
    )
}

export default VideoListItem;