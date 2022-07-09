import { videoImage, creatorAvatar } from "../utils/videoImages";
import "../components/VideoCard.css"
const VideoCard = ({ video }) => {
  const { _id, title, creator, creatorAvatarId } = video;

  return (
    
    <div className=" card card__vertical">
        <div className="image-container-vert">
            <img className="img responsive-image"
                src={videoImage(_id)}
                alt={title}/>
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