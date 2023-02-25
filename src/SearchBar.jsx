import {useState,useEffect} from 'react'

const SearchBar = () => {

    const[search,setSearch] = useState('')

   const handleSearch = (e) =>{
    e.preventDefault();
    console.log('clicked')
   }


    return (    
        <>
  <form onSubmit={handleSearch} action="#" method="post" className=""><div className="mb-4">

<input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={search} onChange={(e) =>setSearch(e.target.value)} type="text" name="field-name" placeholder="SEARCH....." id=""/>
</div><div className="mb-6">
<div className="mb-1">
  <label>
    <input type="radio" name="radio-name" value="option 1" checked=""/>
    <span className="ml-1">Radio option 1</span>
  </label>
</div>
<div>
  <label>
    <input type="radio" name="radio-name" value="option 2"/>
    <span className="ml-1">CNN</span>
  </label>
</div>
</div><button className="inline-block py-4 px-6 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 rounded-sm transition duration-200" type="submit">ENTER</button></form>
        </>
     );
}
 
export default SearchBar;