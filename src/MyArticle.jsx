import NavBar from "./NavBar";
import {useState, useEffect} from 'react'
import {Swiper as SwiperComponent,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useNavigate} from 'react-router-dom'

import 'swiper/swiper-bundle.min.css';
import TipTap from "./TipTap";

import Footer from "./Footer";



const MyArticle = ({user}) => {

    const[myArticles, setMyArticles] = useState([])
    const[click,setIsClicked]=useState(false)
    const[articleId, setArticleId] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/saved_articles")
          .then((r) => r.json())
          .then((r) => {
            console.log(r)
            setMyArticles(r);
          })
      }, [click]);


      // remove article from work flow

      const removeArticle = (id) => {
        console.log(id)
        // e.preventDefault();
        fetch(`/my_articles/${id}`,{
          method:'DELETE',
          
        }).then(r => {
          if(r.ok){
            setIsClicked(!click)
            console.log(r)

          }else{
            // need error handling here
          }
        }).then(navigate("/myarticles"))

      }



      

      const displayMyArticles = myArticles.map((art) => {
        return(
          
    <section className="section flex-wrap items-center mx-auto mt-3 mb-3 w-3/6" key={art.story.id}>
       

    <div className="flex flex-wrap items-center -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
        <div className="max-w-lg xl:max-w-md">
          <a className="inline-block font-heading text-green-500 hover:text-green-600 mb-2 ml-0.5" href={art.story.url}>#{art.story.source}</a>
          <h3 className="font-heading text-3xl sm:text-4xl mb-8">{art.story.title}</h3>
          <div className="flex items-center">
            <a className="text-sm leading-6 font-medium hover:underline" href="#">Author: {art.story.author}</a>
          </div>
           
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <img className="block w-full rounded-md" src={art.story.img_url} alt=""/>
      </div>
    </div>
    <div className="max-w-3xl mx-auto pt-14">
      <p className="text-lg leading-8 mb-6">{art.story.description}</p>
      
      
    </div>
    <a class="inline-block py-4 px-1 text-center font-heading font-medium text-base text-white bg-slate-500 hover:bg-green-600 rounded-sm transition duration-200" onClick={()=>removeArticle(art.story.id)}>Remove</a>
    <a class="inline-block py-4 px-1 text-center font-heading font-medium text-base text-white bg-slate-500 hover:bg-green-600 rounded-sm transition duration-200" onClick={(e)=>setArticleId(art.story.id)}>Add Summary</a>
</section>


)})
      
    return (    
    
        <>
        <NavBar />
            <SwiperComponent
            className="slide flex-wrap items-center mx-auto mt-3 mb-3 w-8/12"
            modules={ [Navigation, Pagination, Scrollbar, A11y] }
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            > 
            {displayMyArticles.map((arts)=><SwiperSlide >{arts}</SwiperSlide>)}
            </SwiperComponent>
            <TipTap articleId={articleId}/>
            <Footer />
        </>
     );
}
 
export default MyArticle;