import { createContext, useContext, useEffect, useReducer } from "react";
import {actionTypes} from "../reducers/actionTypes";
import {videosReducer} from "../reducers/videosReducer";
import { videoServices } from "../services/videoServices";

const { GET_VIDEOS } = actionTypes;

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videosState, dispatchVideo] = useReducer(videosReducer, {
    videos: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await videoServices(); 
        console.log(data);
        if (status === 200) {
          dispatchVideo({
            type:GET_VIDEOS,
            payload: { videos: data.videos },
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  
  return (
    <VideosContext.Provider value={{ videosState, dispatchVideo }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
