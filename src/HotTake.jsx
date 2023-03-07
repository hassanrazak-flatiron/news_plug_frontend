import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
const HotTake = () => {


<section className="py-16">
  <div className="container px-4 mx-auto">
    <div className="p-4 sm:p-8 bg-gray-50 rounded-md">
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">
          <img className="block w-full h-112 mx-auto rounded object-cover object-top" src="acros-assets/images/testimonials/man-medium.jpg" alt=""/>
        </div>
        <div className="w-full lg:w-2/3 px-4">
          <div className="max-w-2xl mx-auto">

            <h3 className="font-heading text-2xl md:text-3xl mt-2 mb-6">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h3>
            <p className="max-w-md text-lg leading-8 mb-10">If you have ever wondered how to develop your brand, this is the place for you.</p>
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center mb-6 sm:mb-0">

                <div>


                </div>
              </div>
              <div className="flex items-center justify-end">



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    return ( 
        <>
        <NavBar />
        <SearchBar />
        </>
     );
}
 
export default HotTake;