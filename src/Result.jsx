import {Swiper as SwiperComponent,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,  EffectCube } from 'swiper';

import 'swiper/swiper-bundle.min.css';

const Result = ({createArticle, story, user}) => {
    

    return ( 
        <>


{/* <h3 className="font-heading font-medium text-lg mb-10 w-full">{story.title}</h3> */}
<SwiperComponent
            className="slide flex-wrap items-center w-full h-full mb-4"
            modules={ [Navigation, Pagination, Scrollbar,A11y, EffectCube] }
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            effect="cube"
            // autoplay={{delay:5000}}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            > 
                    <SwiperSlide className="leading-7 bg-slate-500" > 

                      <p className="font-heading font-medium text-3xl w-full text-white text-center"><a className="group inline-flex items-center font-heading font-medium text-white" href={story.url}>{story.source}</a></p>
                
                    <img className="w-full h-6/12 p-3 mb-4 justify-center border-white border" src={story.img_url} alt=""/>
                   
                  <button className="inline-block p-1  font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 hover:border-green-600 rounded-sm transition duration-200  border-white border ml-3" onClick={() => createArticle(story.id)}>Add to Articles</button>
                  
                  <button className="inline-block p-1  font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 hover:border-green-600 rounded-sm transition duration-200  border-white border ml-3" ><a href={story.url}>Read More</a></button>
  
  
                
                    </SwiperSlide>
                        
                    
                    <SwiperSlide className="leading-7 mb-1 bg-slate-500" >
                    <h3 className="font-heading font-medium text-3xl w-full text-white text-center mt-20 border-white border">{story.title}</h3>
                      </SwiperSlide>
                 
                    <SwiperSlide className="leading-7 bg-slate-500">
                        <p className="leading-7 m-auto bg-slate-500 text-white p-8 border-white border">{story.description}</p></SwiperSlide>
                  
{/* 
                    <SwiperSlide className="leading-7  bg-slate-500 text-white">

                    { user ? 
                  <button className="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 hover:border-green-600 rounded-sm transition duration-200 mt-20 ml-20 pl-20 border-white border" onClick={() => createArticle(story.id)}>Add to Articles</button>
                  :
                  <button className="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600  hover:border-green-600 rounded-sm transition duration-200 mt-20 ml-20 pl-20 border-white border" href={story.url}>Read More </button>
  
  
                }    
                        
                    </SwiperSlide> */}

                    

                    
          
            </SwiperComponent>
        </>
     );
}
 
export default Result;