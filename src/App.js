import Landing from "./Landing";
import Home from "./Home";
import { Route, Routes } from "react-router-dom"
import {useState, useEffect} from 'react'
import SignUp from "./SignUp";


function App() {
  const[user,setUser] = useState(null)
  const [headlines, setHeadLines] = useState([]);

  useEffect(() => {
    fetch("/headlines")
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setHeadLines(data);
      })
  }, []);

  return (
 <>
        <Routes>
          <Route path="/" element={<Landing headlines = {headlines} />} />
          <Route path="/home" element={<Home headlines = {headlines} />} />
          <Route path="/signup" element={<SignUp />} />
         </Routes>

 </>
  );
 
}

export default App;
