const SearchResults = ({stories}) => {


    const search_stories = stories.map(story => {
        return(
            
<section className="py-16">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center -mx-4 mb-12">
      <div className="w-full xl:w-2/3 px-4 mb-8 xl:mb-0">
        {/* <div className="text-sm mb-2 font-semibold text-gray-900 uppercase">
          <span>Broswe </span>
          <span className="text-green-500">       YOUR RESULTS</span>
        </div> */}
        <h2 className="max-w-md font-heading text-3xl sm:text-4xl"></h2>
      </div>
      <div className="w-full xl:w-auto ml-auto px-4 xl:text-right"></div>
    </div>
    <div className="flex flex-wrap -mx-4 -mb-12">
      <div className="w-full lg:w-1/2 px-4 mb-12">
        <div className="sm:flex">
          <img className="w-40 h-40 rounded mb-6 sm:mb-0 sm:mr-8" src={story.img_url} alt=""/>
          <div>
            <span className="text-sm font-semibold uppercase text-gray-200">{story.date}</span>
            <h3 className="font-heading font-medium text-lg mt-2 mb-4">{story.title}</h3>
            <p className="leading-7 mb-4">{story.description}</p>
            <a className="group inline-flex items-center font-heading font-medium" href="#">
              <span className="mr-4">Add  to  Articles</span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 group-hover:bg-green-100">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.49992 4H8.49992M8.49992 4L5.49992 1M8.49992 4L5.49992 7" stroke="#00CBA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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
        {search_stories}
        </>
     );
}
 
export default SearchResults;