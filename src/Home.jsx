import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import TopHeadlines from "./TopHeadlines";
import SearchResults from "./SearchResults";
import Footer from "./Footer";
import {useState} from 'react'


const Home = ({headlines}) => {

    const[stories,setStories] = useState([])


    return (    
        <>
        <NavBar />
        <SearchBar  stories={stories} setStories={setStories}/>
        <TopHeadlines headlines={headlines}/>
        <SearchResults stories={stories} setStories={setStories}/>
        <Footer />

        </>
     );
}
 
export default Home;