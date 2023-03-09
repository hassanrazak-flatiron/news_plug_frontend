import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import {useEffect, useState} from 'react'
import Take
 from "./Take";
const HotTake = ({search, source, setSource, setSearch,user}) => {

    const [hottake,setHottakes] = useState([])

    useEffect(() => {
        // Hot Takes
        fetch(`/hot_takes`)
        .then((r) => {
          if (r.ok) {
            r.json().then((r) => setHottakes(r));
          }
        });
      }, []);

  console.log(hottake)
      const filteredTakes = hottake.filter(take =>{
        if(source === "All") return true
        return(take.my_article.story.source.toLowerCase().includes(source.toLowerCase()))
      })
      
      
      const searchTakes = filteredTakes.filter(take =>{
      // console.log(s.description)
          if(search === '') return true
          
          return (take.tags.toLowerCase()).includes(search.toLowerCase())
          
      
      })


    return ( 
        <>
        <NavBar />
        <SearchBar search={search} source={source} setSource={setSource} setSearch={setSearch}/>
        {searchTakes.map(take =>{
          return(
            <Take key={take.id} take={take} />
          )
        })}
        </>
     );
}
 
export default HotTake;