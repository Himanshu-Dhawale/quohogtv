import React ,{useEffect} from 'react'
// import { Link } from "react-router-dom";
// import {Sidebar} from "../../components/Sidebar"
import { useAuth } from '../../contexts/auth-context';
import { useLikeVideos } from '../../contexts/like-context'
import { videoImage, creatorAvatar } from '../../utils/videoImages';
import axios from "axios";
function LikedVideos() {
    const {likedVideos, setLikedVideos} = useLikeVideos();
    const {user} = useAuth();
    useEffect(() => {
     (async() => {
    //  const response = await axios.get("/api/user/likes", {authorization: user.token})
    const response = await axios({
        method: "get",
  url: "/api/user/likes",
  headers: { authorization: user.token }

    })
     console.log(response.data.likes)
     setLikedVideos(response.data.likes)
     })()
    }, [setLikedVideos,user.token])
    
  return (
    <div className='card card__vertical'>
    {likedVideos && likedVideos.map(({creatorAvatarId, description,title,_id}) => {
      return (
        <div className="card card-image" key={_id}>
          {/* <img src={videoImage(_id)} alt="video-img"/>
          <img className="avatar avatar-standard" src={creatorAvatar(creatorAvatarId)} alt=''/>
          <p>{description}</p>
          <p>{title}</p> */}
          <div className=" card card__vertical">
                <div className="image-container-vert">
                    <img className="img responsive-image"
                        src={videoImage(_id)}
                        alt={title}
                        />
                    
                </div>
                    <img className="avatar avatar-standard" src={creatorAvatar(creatorAvatarId)} alt=''/>
                    <div className="text-container vertical-text">
                        <h4 className="card-title card-content">{title}</h4>
                    </div>
                </div>
          
        </div>
      )
    })}
          </div>
  )
}

export  {LikedVideos}