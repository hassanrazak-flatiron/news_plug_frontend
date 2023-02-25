import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import TopHeadlines from "./TopHeadlines";
import SearchResults from "./SearchResults";
import Footer from "./Footer";


const Home = ({headlines}) => {


    return (    
        <>
        <>Will contain NavBar, Search Bar, top headlines cards, search results, and footer  </>
        <NavBar />
        <SearchBar />
        <TopHeadlines headlines={headlines}/>
        <SearchResults />
        <Footer />

        </>
     );
}
 
export default Home;