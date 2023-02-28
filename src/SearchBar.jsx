import {useState,useEffect} from 'react'

const SearchBar = ({stories,setStories}) => {

    const[search,setSearch] = useState('')
    

   const handleSearch = (e) =>{
    e.preventDefault();
    if({search} == ''){
        
    }else{

        fetch(`/search_stories/${search}`)
        .then(r => r.json())
        .then(r => setStories(r))
        console.log(stories)
        
    }
    }


    return (    
        <>
  <form onSubmit={handleSearch} action="#" method="post" className=""><div className="mb-4">

<input className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none" value={search} onChange={(e) =>setSearch(e.target.value)} type="text" name="field-name" placeholder="SEARCH....." id=""/>
</div><div className="mb-6">
<div className="mb-1">
  <label>
    <input type="radio" name="radio-name" value="option 1" />
    <span className="ml-1">BBC</span>
  </label>
</div>
<div>
  <label>
    <input type="radio" name="radio-name" value="option 2" />
    <span className="ml-1">CNN</span>
  </label>
</div>
<div>
  <label>
    <input type="radio" name="radio-name" value="option 3" />
    <span className="ml-1">NPR</span>
  </label>
</div>
<div>
  <label>
    <input type="radio" name="radio-name" value="option 4" />
    <span className="ml-1">Politico</span>
  </label>
</div>
<div>
  <label>
    <input type="radio" name="radio-name" value="option 5" />
    <span className="ml-1">NBC</span>
  </label>
</div>
</div><button className="inline-block py-4 px-6 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-800 rounded-sm transition duration-200" onKeyDown={e => e.key === 'Enter' ? handleSearch : ''} type="submit">ENTER</button></form>
        </>
     );
}
 
export default SearchBar;