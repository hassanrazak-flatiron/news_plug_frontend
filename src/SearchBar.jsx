

const SearchBar = () => {


    return (    
        <>
   <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
  <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0"><div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
    <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0"><div className="mb-4">

      <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" type="text" name="field-name" placeholder="SEARCH......." id=""/>
      </div></div>
    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><a className="inline-block py-4 px-6 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 rounded-sm transition duration-200" href="#">ENTER</a></div>
    </div></div>
  <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><div className="mb-6">
    <div className="mb-1">
      <label>
        <input type="radio" name="radio-name" value="option 1" checked=""/>
        <span className="ml-1">NBC</span>
      </label>
    </div>
    <div>
      <label>
        <input type="radio" name="radio-name" value="option 2"/>
        <span className="ml-1">BBC</span>
      </label>
    </div>
    </div></div>
</div>
        </>
     );
}
 
export default SearchBar;