import React, { useEffect, useState } from 'react'
import "./SingleVideoPage.css"
import { AiOutlineEye, AiFillLike } from "react-icons/ai";
import { BiPlayCircle} from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import {useParams} from "react-router-dom"
import axios from "axios";
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
export const SingleVideoPage = () => {
  const {videoId} = useParams()
  const [singleVideo, setSingleVideo] = useState({});

  useEffect(() => {
    (async() =>{
      const response = await axios.get(`/api/video/${videoId}`)
      setSingleVideo(response.data.video)
      console.log(response.data.video)
   
    })()
  }, [videoId])
  
  return (
    <div className='video-detail'>
      
      <Navbar/>
      <Sidebar/>
      {singleVideo &&(
        <div className="video-container">
       <iframe
            className="video-player"
            src={`https://www.youtube.com/embed/${singleVideo._id}`}
            title="YouTube video player"
            frameBorder="0"
          ></iframe>
          <div className="video-title">{singleVideo.title}</div>
          <div className="video-main">
          <div className="video-views video">
              <AiOutlineEye className="video-icons" />
              <span className="video-icon-title"> {singleVideo.viewCount}</span>
            </div>
            <div className="video-like video">
                <AiFillLike className="video-icons" />
                <span className="video-icon-title"></span>
              </div>
              <div className="video-later video">
                <MdWatchLater className="video-icons" />
                <span className="video-icon-title"></span>
              </div>
              <div
              className="video-playlist video">
                <BiPlayCircle className="video-icons" />
                <span className="video-icon-title">add to playlist</span>
              </div>
          </div>
          <div className="video-creator">{singleVideo.creator}</div>
          <div className="video-description">{singleVideo.description}</div>
      </div>
    )}
      
    </div>
  )
}