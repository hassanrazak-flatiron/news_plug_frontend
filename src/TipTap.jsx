import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import ToolBar from './ToolBar';
import { FaImage } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import {useState} from "react"





const TipTap = ({articleId}) => {
        const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: 'START TYPING',
  })

const[title, setTitle] = useState('')
const[tags, setTags] = useState('')


const navigate=useNavigate()

  const saveToSummaries = (e) =>{
    e.preventDefault()

    const content = editor.getHTML()
    // console.log(articleId)
   fetch('/hot_takes', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            summary: content,
            title: title,
            my_article_id:articleId,
            tags:tags
       
        }),
  
        })
        // ./then(resp => {

        //   resp.json()
        //   if(resp.ok) {
        //       console.log(resp)
        //       navigate('/hottakes')
        //   } else {
        //       console.log("POST CREATION FAILED")
        //   }
        // })
      }

  return (
  <>

<div className='rounded-lg p-10 h-max w-full '>
            <div className='bg-slate text-dianne px-10 py-2 grid gap-2 grid-cols-12 justify-between items-center text-center'>
                <ToolBar editor={editor} />
                {/* <button className="toolbar" onClick={addImage}><FaImage /></button> */}
            </div>
            </div>
            <hr />
            <div className='flex w-full bg-slate item-center'>
            <input  className="w-full p-3 border-chateau bg-slate text-left text-xl font-bold placeholder:font-bold placeholder:text-xl"
            type="text"
            name='title' 
            placeholder='Enter a title...' 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            
            /><br />
            </div>
            <div className='flex w-full bg-slate item-center'>
            <input  className="w-full p-3 border-chateau bg-slate text-left text-xl font-bold placeholder:font-bold placeholder:text-xl"
            type="text"
            name='tags' 
            placeholder='Enter tags...' 
            value={tags}
            onChange={(e)=>setTags(e.target.value)}
            
            /><br />
            </div>
            <div className='flex w-full bg-slate item-center'>
            <input  className="w-full p-3 border-chateau bg-slate text-left text-xl font-bold placeholder:font-bold placeholder:text-xl"
            type="text"
            name='article_id' 
            placeholder='Enter Article Id' 
            value={articleId}
            onChange={(e)=>setTags(e.target.value)}
            
            /><br />
            </div>
            <hr />
            <div className="w-full p-3 border-chateau bg-slate text-left text-xl font-bold placeholder:font-bold placeholder:text-xl prose lg:prose-2xl max-w-none overflow-auto scrollbar-hide md:scrollbar-default ">
                <EditorContent editor={editor} />
            </div>
            <hr />

            
            <div className='bg-chateau flex justify-center items-center space-x-3 p-3'>
                <button className="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200 mb-4 ml-3" onClick={saveToSummaries} >Submit</button>
            </div>
   
  </>
    
    
  )
      
}
 
export default TipTap;