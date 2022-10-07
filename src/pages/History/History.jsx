import React, { useEffect }  from 'react';
import axios from "axios";
import { useAuth } from '../../contexts/auth-context';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { useHistory } from '../../contexts/history-context';
import {creatorAvatar, videoImage} from "../../utils/videoImages"
import { Link } from "react-router-dom";
const History = () => {
    const {user} = useAuth();
    const {history,setHistory} = useHistory();
    useEffect(() => {
        (async () => {
          const response = await axios({
            method: "get",
            url: "/api/user/history",
            headers: { authorization: user.token },
          });
          console.log(response.data.history)
          setHistory(response.data.history);
        })();
      }, [user.token, setHistory]);
    
  return (
    <div className="page-wrapper">
        <Navbar/>
      <Sidebar/>
    <div className="component-container videos-container">
    <div className='card card__vertical'>
        {history.length > 0 && history.map(({creatorAvatarId,title,_id}) => {
            return(
                <div className="card card-image" key={_id}>
                    <div className=" card card__vertical">
                <div className="image-container-vert">
                    <Link to={`/videos/${_id}`}>
                    <img className="img responsive-image"
                        src={videoImage(_id)}
                        alt={title}
                        />
                    </Link>
                    
                </div>
                    <img className="avatar avatar-standard" src={creatorAvatar(creatorAvatarId)} alt=''/>
                    <div className="text-container vertical-text">
                        <h4 className="card-title card-content">{title}</h4>
                    </div>
                </div>
                </div>
            )
        }
        )}
    </div>
    </div>
    </div>
  )
}

export default History