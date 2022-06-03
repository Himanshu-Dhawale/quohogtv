import { Routes, Route } from "react-router-dom";


import "./App.css";
import{Login} from"./Login/Login";
import {Signup} from "./Signup/Signup"
import {Home} from "./Signup/Signup"

function App() {
return(
    <div className="App">
 <Routes>       
<<<<<<< HEAD
<Route path="/" element={<Home />} />
=======
<Route path="/" element={<Home />} /> 
>>>>>>> 111fb36fcde8eff896ae1cbdb5aca036eed197f5
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
</Routes>
</div>
)
}

export default App;
