import {useState,useEffect} from 'react'

const SearchBar = ({ search, setSearch, handleSearch, source, setSource}) => {

    
    

  


    return (    
      
<>
<div className="flex flex-wrap -mx-4 -mb-4 md:mb-0 justify-center">
  <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><div className="mb-6">

    <div className="relative">
      <select onChange={(e)=>setSource(e.target.value)} className="appearance-none block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" name="field-name">
        <option>All</option>
        <option>BBC</option>
        <option>CNN</option>
        <option>NBC</option>
        <option>CBS</option>
        <option>NPR</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </div>
    </div>
    </div></div>
  <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><div className="mb-4">

    <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" name="field-name" placeholder="SEARCH.."/>
    </div></div>
  {/* <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><button className="inline-block py-4 px-6 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 rounded-sm transition duration-200"  type="submit">Submit</button></div>  */}
  {/* onClick={handleSearch} */}
</div>
</>
     );
}
 
export default SearchBar;