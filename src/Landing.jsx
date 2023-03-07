
import Footer from "./Footer";
import NavBarLanding from "./NavBarLanding";
import SearchBar from "./SearchBar";
import TopHeadlinesSwiper from "./TopHeadlinesSwiper";
import SearchResult from "./SearchResult";

const Landing = ({headlines, stories, setStories, user, handleSearch, search, setSearch,source, setSource}) => {
    return ( 
        <>
        <NavBarLanding />
        <SearchBar source={source} setSource={setSource} handleSearch = {handleSearch} search={search} setSearch={setSearch}/>
        <TopHeadlinesSwiper headlines={headlines}/>
        <SearchResult source={source} user={user} stories={stories} setStories={setStories}/>
        <Footer />
        </>
     );
}
 
export default Landing;