import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // () => onVideoSelect(video) , we can't just do onVideoSelect(video), we have to add () => in front of it 
    <div onClick={ () => onVideoSelect(video) } className="video-item item">  
      <img 
        alt={video.snippet.title} 
        className="ui image" src={video.snippet.thumbnails.medium.url} 
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem