import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import TopHeadlinesSwiper from "./TopHeadlinesSwiper";
import SearchResult from "./SearchResult";
import Footer from "./Footer";
import {useState} from 'react'


const Home = ({headlines, user}) => {

    const[stories,setStories] = useState([])


    return (    
        <>
        <NavBar />
        <SearchBar  stories={stories} setStories={setStories}/>
        <TopHeadlinesSwiper headlines={headlines}/>
        <SearchResult user={user} stories={stories} setStories={setStories}/>
        <Footer />

        </>
     );
}
 
export default Home;