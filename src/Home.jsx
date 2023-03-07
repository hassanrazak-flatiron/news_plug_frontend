import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import TopHeadlinesSwiper from "./TopHeadlinesSwiper";
import SearchResult from "./SearchResult";
import Footer from "./Footer";
import {useState} from 'react'


const Home = ({headlines, user, stories, setStories,handleSearch, search, setSearch, source, setSource}) => {

    


    return (    
        <>
        <NavBar />
        <SearchBar  source={source} setSource={setSource} handleSearch = {handleSearch} search={search} setSearch={setSearch}/>
        <TopHeadlinesSwiper headlines={headlines}/>
        <SearchResult search={search} source={source} user={user} stories={stories} setStories={setStories}/>
        <Footer />

        </>
     );
}
 
export default Home;