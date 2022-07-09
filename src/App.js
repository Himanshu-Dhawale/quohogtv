import { Routes, Route } from "react-router-dom";
import "./App.css";
import{Login} from"./Login/Login";
import {Signup} from "./Signup/Signup"
import {Explore} from "./Explore/Explore"
function App() {
return(
    <div className="App">
 <Routes>       
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/explore" element={<Explore />} />
</Routes>
</div>
)
}

export default App;
