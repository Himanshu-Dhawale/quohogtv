import { Routes, Route } from "react-router-dom";
import "./App.css";
import{Login} from"./Login/Login";
import {Signup} from "./Signup/Signup"
import {Explore} from "./Explore/Explore"
import {SingleVideoPage} from "./Single-Video-Page/SingleVideoPage"
import {Home} from "./pages/Home/Home"
import {LikedVideos} from "./pages/LikedVideos/LikedVideos"
import WatchLater from "./pages/WatchLater/WatchLater";
import History from "./pages/History/History";
function App() {
return(
    <div className="App">
 <Routes>       
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/videos" element={<Explore />} />
<Route path="/videos/:videoId" element={<SingleVideoPage />} />
<Route path="/liked-videos" element={<LikedVideos />} />
<Route path="/watch-later" element={<WatchLater />} />
<Route path="/" element={<Home />} />
<Route path="/history" element={<History />} />
</Routes>
</div>
)
}

export default App;
