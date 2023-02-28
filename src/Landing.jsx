
// import Footer from "./Footer";
import NavBarLanding from "./NavBarLanding";
import TopHeadlinesSwiper from "./TopHeadlinesSwiper";

const Landing = ({headlines}) => {
    return ( 
        <>
        <NavBarLanding />
        <TopHeadlinesSwiper headlines={headlines}/>
        {/* <TopHeadlines headlines = {headlines}/> */}
        {/* <Footer /> */}
        </>
     );
}
 
export default Landing;