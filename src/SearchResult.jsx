import {useState} from 'react'
import Result from './Result'


const SearchResult = ({stories, user,source, search}) => {

  const[workflow,setWorkflow] = useState(null)


// const[selectedArticles,setSelectedArticles] = useState([])

const createArticle = (id) => {
  console.log(id)
  console.log(user?.id)
  fetch('/my_articles',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        user_id: user?.id,
        story_id:id,
        workflow:workflow
    }),
}).then(r =>{
    if (r.ok) {
        // r.json().then((user) =>setUser(user));
        console.log(r)
        
      } else {
        // r.json().then((err) => setErrors(err.errors));
        
      }
    });
}

const filteredStories = stories.filter(s =>{
  if(source === "All") return true
  return(s.source == source)
})


const searchStories = filteredStories.filter(s =>{
// console.log(s.description)
    if(search === '') return false
    
    return (s.description.toLowerCase()).includes(search.toLowerCase())
    

})

    return ( 
        <>
         <div className="text-sm mb-2 font-semibold text-gray-900 uppercase">
          <span>Browse </span>
          <span className="text-green-500">SEARCH RESULTS</span>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-8 m-32" >
        {searchStories.map(story => {
          return(
            <>
            
            
            <Result 
          
            user={user} createArticle={createArticle} key={story.id} story={story}/>
            </>
          )
        })}
        </div>
        
        </>
     );
}
 
export default SearchResult;
