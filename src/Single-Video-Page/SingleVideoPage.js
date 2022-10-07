import React, { useEffect, useState } from 'react'
import "./SingleVideoPage.css"
import { AiOutlineEye, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../contexts/auth-context';
import { useLikeVideos } from '../contexts/like-context';
import { useWatchVideos } from '../contexts/watchlater-context';
import { PlaylistModal } from '../components/PlaylistModal';
export const SingleVideoPage = () => {
  const { videoId } = useParams()
  const [singleVideo, setSingleVideo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate()
  const { likedVideos, setLikedVideos } = useLikeVideos();
  const { watchVideos, setWatchVideos } = useWatchVideos();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/video/${videoId}`)
      setSingleVideo(response.data.video)
      // console.log(response.data.video)

    })()
  }, [videoId])
  // console.log(user.token);

  const likeHandler = async (video) => {
    // console.log(user)
    if (!user.user) {
      navigate("/login")
    } else {
      try {
        const response = await axios({
          method: "post",
          url: "/api/user/likes",
          headers: { authorization: user.token },
          data: { video },
        });
        setLikedVideos(response.data.likes);
      } catch (error) {
        console.log(error);
      }

    }
  }
  const unlikeHandler = async (video) => {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/user/likes/${video._id}`,
        headers: { authorization: user.token },
        data: { video },
      });
      setLikedVideos(response.data.likes);
    } catch (error) {
      console.log(error);
    }

  }
  const watchHandler = async (video) => {
    if (!user.user) {
      navigate("/login")
    } else {
      try {
        const response = await axios({
          method: "post",
          url: "/api/user/watchlater",
          headers: { authorization: user.token },
          data: { video },
        });
        console.log(response)
      } catch (error) {
        console.log(error);
      }

    }
  }
  const removeWatchHandler = async (video) => {
    try {
      const response = await axios({
        method: "delete",
        url: `/api/user/watchlater/${video._id}`,
        headers: { authorization: user.token },
        data: { video },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }
  const modalHandler = () => {
    setShowModal(true)
  }
  return (
    <div className='video-detail'>

      <Navbar />
      <Sidebar />
      {singleVideo && (
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
              {likedVideos.some(video => video._id === singleVideo._id) ? <AiFillLike className="video-icons" onClick={() => unlikeHandler(singleVideo)} /> : <AiOutlineLike className="video-icons" onClick={() => likeHandler(singleVideo)} />}

              <span className="video-icon-title"></span>
            </div>
            {/* {watchVideos.some(video => video._id===singleVideo._id)?(
                  <div className="video-later video" onClick={removeWatchHandler}><MdWatchLater className="video-icons" />
                  <span className="video-icon-title">watch later</span>
              </div>):(
                <div className="video-later video" onClick={watchHandler}>
                <MdOutlineWatchLater className="video-icons" />
                <span className="video-icon-title">watch later</span>
              </div>
              )} */}
            <div className="video-later video" onClick={() => watchHandler(singleVideo)}>
              <MdOutlineWatchLater className="video-icons" />
              <span className="video-icon-title">watch later</span>
            </div>
            <div
              className="video-playlist video" onClick={modalHandler}>
              <BiPlayCircle className="video-icons" />
              <span className="video-icon-title">add to playlist</span>
            </div>
          </div>
          <div className="video-creator">{singleVideo.creator}</div>
          <div className="video-description">{singleVideo.description}</div>
          {showModal && <PlaylistModal setShowModal={setShowModal} singleVideo={singleVideo}/>}
        </div>
      )}

    </div>
  )
}