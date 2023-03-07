import {Swiper as SwiperComponent,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';



const TopHeadlinesSwiper = ({headlines, user}) => {

    const slides = headlines.map((hl)=>{

        return(
          <section className="py-16 bg-gray-50 mt-10 mb-0">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <img className="block w-full max-w-xl mx-auto rounded" src={hl.img_url} alt=""/>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-xl mx-auto">
        
                  <h3 className="font-heading text-2xl md:text-3xl mt-2 mb-6">{hl.title}</h3>
                  <p className="max-w-md text-lg leading-8 mb-10">{hl.description}</p>
                  <div className="flex items-center">
        
                    <div>
                      <h4 className="font-heading font-medium mb-1">{hl.author}</h4>
                      <span className="text-gray-300">{hl.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
    })
        
       
        
       
        return ( 
            <>
            <SwiperComponent
            className="slide flex-wrap items-center mx-auto my-auto w-11/12 h-1/3"
            modules={ [Navigation, Pagination, Scrollbar, A11y, Autoplay] }
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            autoplay={{delay:5000}}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            > 
            {slides.map((slide)=><SwiperSlide key={slide.id}>{slide}</SwiperSlide>)}
            </SwiperComponent>
    
    
        </>
     );
}
 
export default TopHeadlinesSwiper;