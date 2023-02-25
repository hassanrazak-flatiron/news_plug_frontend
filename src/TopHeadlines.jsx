import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TopHeadlines = ({headlines}) => {
    
    const top_headers = headlines.map((hl)=>{
        return(

            <section className="py-16">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center -mx-4 mb-12">
      <div className="w-full xl:w-2/3 px-4 mb-8 xl:mb-0">
        <div className="text-sm mb-2 font-semibold text-gray-900 uppercase">


        </div>
        <h2 className="max-w-xl font-heading text-3xl sm:text-4xl" contenteditable="false">{hl.description}</h2>
      </div>

    </div>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        <div className="relative flex items-end h-full pt-24 overflow-hidden rounded-md">
          <img className="absolute top-0 left-0 h-full w-full object-cover" src={hl.img_url} alt=""/>
          <div className="relative max-w-lg p-6 sm:p-8">
            <div className="mb-2"><a className="inline-block font-heading text-white hover:text-gray-100 mr-4" href="#" contenteditable="false">#{hl.source}</a></div>
            <h3 className="font-heading text-3xl text-white mb-4" contenteditable="false">{hl.title}</h3>

            <a className="group inline-flex items-center font-heading font-medium text-white" href="#">
              <span className="mr-4">Read more</span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 bg-opacity-70 group-hover:bg-opacity-100">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </a>
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
{top_headers}

</>

     );
}
 
export default TopHeadlines;