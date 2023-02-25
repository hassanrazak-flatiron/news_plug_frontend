import Footer from "./Footer";
import NavBarLanding from "./NavBarLanding";
import TopHeadlines from "./TopHeadlines";

const Landing = ({headlines}) => {
    return ( 
        <>
        <NavBarLanding />
        <TopHeadlines headlines = {headlines}/>
        {/* <Footer /> */}
        </>
     );
}
 
export default Landing;