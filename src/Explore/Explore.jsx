// import React from 'react'
import "../Explore/Explore.css"
import { VideoCard } from "../components/VideoCard";
import {Navbar} from "../components/Navbar";
import { Sidebar } from '../components/Sidebar';
import { useVideos } from "../contexts/videoContext";

const Explore = () => {
    const{videosState:{videos}} = useVideos();
console.log(videos);
  return (
    <div className="page-wrapper">
      <Navbar/>
      <Sidebar/>
      <div className="component-container videos-container">
          {videos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
    </div>
  )
}

export {Explore}