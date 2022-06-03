import { Routes, Route } from "react-router-dom";


import "./App.css";
import{Login} from"./Login/Login";
import {Signup} from "./Signup/Signup"
import {Home} from "./Signup/Signup"

function App() {
return(
    <div className="App">
 <Routes>       
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
</Routes>
</div>
)
}

export default App;