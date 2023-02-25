import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import TopHeadlines from "./TopHeadlines";
import SearchResults from "./SearchResults";
import Footer from "./Footer";


const Home = ({headlines}) => {


    return (    
        <>
        <NavBar />
        <SearchBar />
        <TopHeadlines headlines={headlines}/>
        <SearchResults />
        <Footer />

        </>
     );
}
 
export default Home;