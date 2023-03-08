import Landing from "./Landing";
import Home from "./Home";
import { Route, Routes,useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import SignUp from "./SignUp";
import Login from "./Login";
import MyArticle from "./MyArticle";
import HotTake from "./HotTake";



function App() {
 
  const[user,setUser] = useState(null)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [headlines, setHeadLines] = useState([]);
  const[stories,setStories] = useState([])
  const[search,setSearch] = useState("")
  const[source,setSource] = useState("All")
 
  // const handleSearch = (e) =>{
  //   e.preventDefault()
  // fetch(`/search_stories/${search}`)
  //       .then(r => r.json())
  //       .then(r => setStories(r))
  //       console.log(stories)
        
    
  //   }

  useEffect(() => {
    // stories
    fetch("/stories")
    .then((r) => {
      if (r.ok) {
        r.json().then((r) => setStories(r));
      }
    });
  }, []);

  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);



  useEffect(() => {
    fetch("/headlines")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        setHeadLines(data);
      })
  }, []);

  return (
 <>
        <Routes>
          <Route path="/"
          element={
          <Landing
          source={source}
          setSource={setSource} 
          // handleSearch = {handleSearch}
          search={search} 
          setSearch = {setSearch}
          stories={stories} 
          setStories={setStories} 
          user={user} 
          headlines = {headlines} 
          />} 
          />
          <Route path="/home" 
          element={
          <Home
          source={source}
          setSource={setSource}  
          // handleSearch = {handleSearch}
          search={search} 
          setSearch = {setSearch}
          stories={stories} 
          setStories={setStories} 
          user={user} 
          headlines = {headlines} 
          />} 
          />
          <Route path="/signup" element={<SignUp email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/login" element={<Login setSearch={setSearch} email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/myarticles" element={<MyArticle user={user}/>} />
          <Route path="/hottakes" element={<HotTake />} />
          </Routes>
          

 </>
  );
 
}

export default App;
