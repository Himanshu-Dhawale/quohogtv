import axios from "axios";

const videoServices = () => {
  return axios.get("/api/videos");
};

export { videoServices };
