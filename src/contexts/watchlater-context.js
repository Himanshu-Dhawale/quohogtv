import { createContext, useContext, useState } from "react";


const WatchContext = createContext();

const WatchProvider = ({children}) => {
    const [watchVideos, setWatchVideos] = useState([]);
return(
    <WatchContext.Provider value={{watchVideos, setWatchVideos}}>{children}</WatchContext.Provider>
)
}

const useWatchVideos = () => useContext(WatchContext)

export {WatchProvider, useWatchVideos}