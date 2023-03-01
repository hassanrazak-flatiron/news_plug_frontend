import NavBar from "./NavBar";
import {useState, useEffect} from 'react'
import {Swiper as SwiperComponent,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import TipTap from "./TipTap";



const MyArticle = ({user}) => {
    const[myArticles, setMyArticles] = useState([])

    useEffect(() => {
        fetch("/saved_articles")
          .then((r) => r.json())
          .then((r) => {
            console.log(r)
            setMyArticles(r);
          })
      }, []);

      const displayMyArticles = myArticles.map((art) => {
        return(
            <section key={art.story.id}>

    <div className="flex flex-wrap items-center -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
        <div className="max-w-lg xl:max-w-md">
          <a className="inline-block font-heading text-green-500 hover:text-green-600 mb-2" href={art.story.url}>#{art.story.source}</a>
          <h3 className="font-heading text-3xl sm:text-4xl mb-8">{art.story.title}</h3>
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full mr-3" src="acros-assets/images/blog-content/man-32x32.png" alt=""/>
            <a className="text-sm leading-6 font-medium hover:underline" href="#">{art.story.author}</a>
            <div className="w-px h-8 mx-4 sm:mx-8 bg-gray-200"></div>
            <div className="flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.09277 9.40421H20.9167" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16.4422 13.3097H16.4515" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12.0045 13.3097H12.0137" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7.55793 13.3097H7.5672" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16.4422 17.1962H16.4515" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12.0045 17.1962H12.0137" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7.55793 17.1962H7.5672" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16.0438 2V5.29078" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7.9654 2V5.29078" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="#2B3031" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <a className="ml-2 text-sm leading-6 font-medium hover:underline" href="#">{art.user} Write Your Take</a>
            </div>
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
</section>

)})
      
    return (    
    
        <>
        <NavBar />
        {user ? 
      <h2 className="max-w-xl font-heading text-3xl sm:text-4xl" contenteditable="false">{user?.first_name}'s Articles</h2>
      :
      <h2 className="max-w-xl font-heading text-3xl sm:text-4xl" contenteditable="false">My Articles</h2>
      }

            <SwiperComponent
            modules={ [Navigation, Pagination, Scrollbar, A11y] }
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            > 
            {displayMyArticles.map((arts)=><SwiperSlide>{arts}</SwiperSlide>)}
            </SwiperComponent>
            <TipTap />
        </>
     );
}
 
export default MyArticle;