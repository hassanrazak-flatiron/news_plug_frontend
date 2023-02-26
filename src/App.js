import Landing from "./Landing";
import Home from "./Home";
import { Route, Routes } from "react-router-dom"
import {useState, useEffect} from 'react'
import SignUp from "./SignUp";
import Login from "./Login";


function App() {
  const[user,setUser] = useState(null)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
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
          <Route path="/signup" element={<SignUp email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/login" element={<Login email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>} />
          </Routes>

 </>
  );
 
}

export default App;
