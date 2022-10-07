import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/auth-context';
import {useWatchVideos} from "../../contexts/watchlater-context";
import { videoImage, creatorAvatar } from '../../utils/videoImages';
import axios from "axios";
function WatchLater() {
    const {user} = useAuth();
    const {watchVideos, setWatchVideos} = useWatchVideos();
    useEffect(() => {
        (async() => {
       const response = await axios({
           method: "get",
     url: "/api/user/watchlater",
     headers: { authorization: user.token }
   
       })
       console.log(response.data.watchlater)
       setWatchVideos(response.data.watchlater)
     })()
    }, [setWatchVideos,user.token])
  return (
    <div className='card card__vertical'>
      {watchVideos && watchVideos.map(({creatorAvatarId, description,title,_id}) => {
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

export default WatchLater