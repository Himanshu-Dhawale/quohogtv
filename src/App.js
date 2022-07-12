import { Routes, Route } from "react-router-dom";
import "./App.css";
import{Login} from"./Login/Login";
import {Signup} from "./Signup/Signup"
import {Explore} from "./Explore/Explore"
import {SingleVideoPage} from "./Single-Video-Page/SingleVideoPage"
function App() {
return(
    <div className="App">
 <Routes>       
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/videos" element={<Explore />} />
<Route path="/videos/:videoId" element={<SingleVideoPage />} />
</Routes>
</div>
)
}

export default App;
