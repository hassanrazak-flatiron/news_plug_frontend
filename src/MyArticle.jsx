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
          
          <section className="pb-14">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto mb-12">
              <a className="inline-block font-heading text-green-500 hover:text-green-600 mb-2" href={art.story.url}>#{art.story.source}</a>
              <h3 className="font-heading text-3xl sm:text-4xl mb-8">{art.story.title}</h3>
              <div className="flex items-center">
                <img className="w-8 h-8 rounded-full mr-3" src={art.story.img_url} alt=""/>
                <a className="text-sm leading-6 font-medium hover:underline" href="#">{art.story.author}</a>
                <div className="w-px h-8 mx-4 sm:mx-8 bg-gray-200"></div>
                <div className="flex items-center">
                  <a className="ml-2 text-sm leading-6 font-medium hover:underline" href="#">Denny Bailey</a>
                </div>
              </div>
            </div>
            <img className="block w-full h-112 rounded-md object-cover" src={art.story.img_url} alt=""/>
            <div className="max-w-3xl mx-auto pt-12">
              <p className="text-lg leading-8 mb-6">{art.story.description}</p>
            </div>
          </div>
    <button className="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-red-500 hover:bg-red-600 border border-red-500 hover:border-red-600 rounded-sm transition duration-200 mb-4 ml-3" onClick={()=>removeArticle(art.story.id)}>Remove</button>
    <button className="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200 mb-4 ml-3" onClick={(e)=>setArticleId(art.id)}>Add</button>
        </section>



)})
      
    return (    
    
        <>
        <NavBar />
        <div className="flex flex-wrap -mx-4  md:mb-0 my-5">
              <div className="w-full md:w-1/2 px-4 mb-4">
                              <SwiperComponent
                              className="slide flex-wrap items-center w-full"
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
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 border-l-2 border-black">
                <TipTap articleId={articleId}/>
                
              </div>
        </div>
           
            <Footer />
        </>
     );
}
 
export default MyArticle;