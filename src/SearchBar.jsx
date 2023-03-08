import {useState,useEffect} from 'react'

const SearchBar = ({ search, setSearch, handleSearch, source, setSource}) => {

    
    

  


    return (    
      
<>
<div className="flex flex-wrap -mx-4  md:mb-0 justify-center mt-10">
  <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0"><div className="mb-6">

    <div className="relative">
        <label className="text-green-500 text-xl font-semibold uppercase ml-56">Sources</label>
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
  <label className="text-green-500 text-xl font-semibold uppercase ml-56">Search Articles</label>
    <input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" name="field-name" placeholder="SEARCH.."/>
    </div></div>

</div>
</>
     );
}
 
export default SearchBar;