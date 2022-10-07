import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../contexts/auth-context";
import {usePlayList} from '../contexts/playlist-context';
// import {createPlaylist} from "../services/playlist"
import axios from "axios"
function PlaylistModal({singleVideo,setShowModal}) {
  const {user} = useAuth();
  const navigate = useNavigate()
  const {playLists ,setPlayLists } = usePlayList();
  const [playListTitle, setPlayListTitle] = useState("");
  const modalClosehandler = () => {
    setShowModal(false);
  }
  const handlePlaylistInput = (e) => setPlayListTitle(e.target.value);
  const addAndDeleteFromPlaylist = async(e, _id, singleVideo, auth) => {
    if (e.target.checked) {
      
        try {
          const response = await axios.post(
            `/api/user/playlists/${_id}`,
            { video: singleVideo },
            {
              headers: { authorization: auth.token },
            }
          );
          console.log(response.data)
          // setPlayLists(response.data.playlist.videos.map((item)=>item._id===_id))
        } catch (err) {
          console.log(err);
        }
    } else {
        try {
          const response =await axios.delete(`/api/user/playlists/${_id}`, {
            headers: { authorization: auth.token },
          });
          console.log(response)
        } catch (err) {
          console.log(err);
        }
    }
  };
  const createPlaylist = async (user, playListTitle, setPlayLists, navigate) => {
    if (!user.user) {
      navigate("/login");
    } else {
      if (playListTitle.length !== 0) {
        try {
          const response = await axios({
            method: "post",
            url: "/api/user/playlists",
            headers: { authorization: user.token },
            data: { playlist: { title: playListTitle } },
          });
          console.log(response, "from create playlist")
          setPlayLists(response.data.playlists);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  return (
    <div className="modal-container">
      <AiOutlineClose onClick={modalClosehandler}/>
      <h4 className="modal-header">Playlist</h4>
      {playLists?.map(({_id, title})=>{
        return(
          <div key={_id}>
            <p>{title}</p>
            <label htmlFor="playlist-title">
            <input
              type="checkbox"
              onChange={(e) =>
                addAndDeleteFromPlaylist(e, _id, singleVideo, user)
              }
            />
          </label>
          </div>
        )
      })}
      <input placeholder='create playlist' 
      onChange={handlePlaylistInput}
      />
      <div className="modal-action-btns">
        <button className="btn btn-primary-solid action-btn"
        onClick={() => createPlaylist(user, playListTitle, setPlayLists, navigate)}
        >Create</button>
      </div>
      <div className="dismiss absolute"><i className='bx bx-x'></i></div>
    </div>
  )
}

export { PlaylistModal }