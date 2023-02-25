import Landing from "./Landing";
// import Home from "./Home";

import {useState, useEffect} from 'react'


function App() {
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
          <Landing headlines = {headlines}/>
          {/* <Home /> */}

 </>
  );
 
}

export default App;
