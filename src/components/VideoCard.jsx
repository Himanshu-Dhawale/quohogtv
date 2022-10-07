import { videoImage, creatorAvatar } from "../utils/videoImages";
import {Link} from "react-router-dom";
import "../components/VideoCard.css";
import { useAuth } from "../contexts/auth-context";
import { useHistory } from "../contexts/history-context";
import axios from "axios";
const VideoCard = ({ video }) => {
    const {user} = useAuth()
    const addToVideoHistory = async () => {
        try {
          const response = await axios({
            method: "post",
            url: "/api/user/history",
            headers: { authorization: user.token },
            data: { video },
          });
          console.log(response)
          setHistory(response.data.history);
        } catch (err) {
          console.log(err);
        }
      };
  const { _id, title, creator, creatorAvatarId } = video;
  const { setHistory } = useHistory();
  
  return (
    
    <div className=" card card__vertical">
        <div className="image-container-vert">
            <Link to={`/videos/${_id}`}>
            <img className="img responsive-image"
                src={videoImage(_id)}
                alt={title}
                onClick={addToVideoHistory}
                />
            </Link>
            
        </div>
            <img className="avatar avatar-standard" src={creatorAvatar(creatorAvatarId)} alt={creator}/>
            <div className="text-container vertical-text">
                <h4 className="card-title card-content">{title}</h4>
                <p className="quiet card-content">{creator}</p>
            </div>
        </div>
        // </div>
  );
};

export { VideoCard };