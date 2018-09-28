import React from 'react'
import '../video-detail.css'

const VideoDetail = ({video}) => {
    if (!video){
        return <div> Loading... </div>
    }
    
    const URL = `http://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="video-detail-container">
            <div className="iframe-container">
             <iframe src={URL} id="main-video"> </iframe>
            </div>
            <div>
                <h1>{video.snippet.title}</h1>
                <p> {video.snippet.description} </p>
            </div>
        </div>    
    )
}

export default VideoDetail;