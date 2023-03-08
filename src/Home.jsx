import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import TopHeadlinesSwiper from "./TopHeadlinesSwiper";
import SearchResult from "./SearchResult";
import Footer from "./Footer";
import {useState} from 'react'


const Home = ({headlines, user, stories, setStories,handleSearch, search, setSearch, source, setSource}) => {

    


    return (    
        <>
        <NavBar setSearch={setSearch}/>
        <TopHeadlinesSwiper headlines={headlines}/>
        <div className="text-3xl mb-2 mt-6 font-semibold text-gray-900 uppercase ml-24 ">
          <span>Browse </span>
          <span className="text-green-500 ml-1">SEARCH RESULTS</span>
        </div>
        <SearchBar  source={source} setSource={setSource} handleSearch = {handleSearch} search={search} setSearch={setSearch}/>
        <SearchResult search={search} source={source} user={user} stories={stories} setStories={setStories}/>
        <Footer />

        </>
     );
}
 
export default Home;