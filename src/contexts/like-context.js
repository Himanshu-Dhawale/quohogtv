import { createContext, useContext, useState } from "react";


const LikeContext = createContext();

const LikeProvider = ({children}) => {
    const [likedVideos, setLikedVideos] = useState([]);
return(
    <LikeContext.Provider value={{likedVideos, setLikedVideos}}>{children}</LikeContext.Provider>
)
}

const useLikeVideos = () => useContext(LikeContext)

export {LikeProvider, useLikeVideos}