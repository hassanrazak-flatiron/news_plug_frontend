import {Swiper as SwiperComponent,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,  EffectCube } from 'swiper';

import 'swiper/swiper-bundle.min.css';

const Result = ({createArticle, story, user}) => {

//     const cubeStories = story.map(s =>{
//         return(
//             <section  className="py-16" key={story.id} id={story.id}>
//     <div className="container px-4 mx-auto">
//       <div className="flex flex-wrap items-center -mx-4 mb-12">
//         <div className="w-full xl:w-2/3 px-4 mb-8 xl:mb-0">
//           <h2 className="max-w-md font-heading text-3xl sm:text-4xl"></h2>
//         </div>
//         <div className="w-full xl:w-auto ml-auto px-4 xl:text-right"></div>
//       </div>
//       <div className="flex flex-wrap -mx-4 -mb-12">
//         <div className="w-full lg:w-1/2 px-4 mb-12">
//           <div className="sm:flex">
//             <img className="w-40 h-40 rounded mb-6 sm:mb-0 sm:mr-8" src={story.img_url} alt=""/>
//             <div>
//               <span className="text-sm font-semibold uppercase text-gray-200">{story.date}</span>
//               <h3 className="font-heading font-medium text-lg mt-2 mb-4 w-full">{story.title}</h3>
//               <p className="leading-7 mb-4"><a className="group inline-flex items-center font-heading font-medium" href={story.url}>{story.source}</a></p>
//               <p className="leading-7 mb-4">{story.description}</p>
             
                // { user ? 
                //   <span className="mr-4" >Add to Articles</span>
                //   :
                //   <a className="group inline-flex items-center font-heading font-medium" href={story.url}>Read More </a>
  
  
                // }
//                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 group-hover:bg-green-800">
//                   <svg  width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path onClick={() => createArticle(story.id)} d="M1.49992 4H8.49992M8.49992 4L5.49992 1M8.49992 4L5.49992 7" stroke="#00CBA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                   </svg>
//                 </div>
      
//             </div>
//           </div>
//         </div>
  
  
  
//       </div>
//     </div>
//   </section>

//         )

//     })
    

    return ( 
        <>



<SwiperComponent
            className="slide flex-wrap items-center mx-auto my-auto w-11/12 h-1/3"
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
                    <SwiperSlide > 
                        
                    <h3 className="font-heading font-medium text-lg mb-10 w-full">{story.title}</h3>
                        <img className="w-40 min-h-full rounded mb-6 sm:mb-0 ml-9/12" src={story.img_url} alt=""/></SwiperSlide>
                    
                    <SwiperSlide className="leading-7 mb-1" >
                    <h3 className="font-heading font-medium text-lg mb-10 w-full">{story.title}</h3>
                      <p className="leading-7 mb-1"><a className="group inline-flex items-center font-heading font-medium" href={story.url}>{story.source}</a></p></SwiperSlide>
                    <SwiperSlide >
                    <h3 className="font-heading font-medium text-lg mb-10 w-full">{story.title}</h3>
                        <p className="leading-7 mb-4">{story.description}</p></SwiperSlide>
                    <SwiperSlide >
                    { user ? 
                  <span className="mr-4" onClick={() => createArticle(story.id)}>Add to Articles</span>
                  :
                  <a className="group inline-flex items-center font-heading font-medium" href={story.url}>Read More </a>
  
  
                }    
                        
                    </SwiperSlide>

                    

                    
          
            </SwiperComponent>
        </>
     );
}
 
export default Result;