import NavBar from "./NavBar";
import {useState, useEffect} from 'react'



const MyArticle = () => {
    const[myArticles, setMyArticles] = useState([])

    useEffect(() => {
        fetch("/my_articles")
          .then((r) => r.json())
          .then((r) => {
            console.log(r)
            setMyArticles(r);
          })
      }, []);
      
    return (    
        <>
        <NavBar />
        Willl contain articles added from top headlines and/or searched article results</>
     );
}
 
export default MyArticle;