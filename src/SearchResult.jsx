import {useState} from 'react'
import Result from './Result'


const SearchResult = ({stories, user,source}) => {


// const[selectedArticles,setSelectedArticles] = useState([])

const createArticle = (id) => {
  console.log(id)
  console.log(user?.id)
  fetch('/my_articles',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        user_id: user?.id,
        story_id:id
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
  console.log(s)
  if(source === "All") return true
  return(s.source == source)
})


    return ( 
        <>
         <div className="text-sm mb-2 font-semibold text-gray-900 uppercase">
          <span>Browse </span>
          <span className="text-green-500">SEARCH RESULTS</span>
        </div>
        <div className="grid grid-cols-2 gap-4">

        {filteredStories.map(story => {
          return(
            <Result user={user} createArticle={createArticle} key={story.id} story={story}/>
          )
        })}
        </div>
        
        </>
     );
}
 
export default SearchResult;