import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import ToolBar from './ToolBar';
import { FaImage } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';





const TipTap = () => {
        const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>START TYPING</p>',
  })

  // const saveToSummaries = (e) =>{
  //   e.preventDefault()
  //   const content = editor.getHTML()
  //   console.log(content)
  //  fetch('/summaries', {
  //       method: "POST",
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //           content: content,
  //           title: title.current.value,
  //           categories: categories.current.value
  //       })
  
  //   })
  //   .then(r => r.json())
  //   if (r.ok) {
  //       console.log(r)
  //       navigate('/home')
  //   } else {
  //       console.log("POST CREATION FAILED")
  //   }
  // }

  return (
    <>

<div className='rounded-lg p-10 h-full w-full'>
            <div className='bg-slate text-dianne px-10 py-2 grid gap-2 grid-cols-12 justify-between items-center text-center'>
                <ToolBar editor={editor} />
                <button className="toolbar"><FaImage /></button>
                {/*  */}
            </div>
            <hr />
            <div className='flex w-full bg-slate item-center'>
            <input  className="w-4/5 p-3 border-chateau bg-slate text-left text-4xl font-bold placeholder:font-bold placeholder:text-4xl" type="text" name='title' placeholder='Enter a title...' /><br />
            {/* ref={title} */}
            <div className='w-auto p-3 flex justify-end items-center text-right outline-2 outline-dianne roundede-lg'>
                    <label htmlFor="select-status">Publication status:</label>
                    <select id="select-status" >
                      {/* value={selectedValue} onChange={handleChange} */}
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
            </div>
            </div>
            <hr />
            <div className='w-full h-3/5 flex bg-slate prose lg:prose-2xl p-5 max-w-none overflow-auto scrollbar-hide md:scrollbar-default'>
                <EditorContent editor={editor} />
            </div>
            <hr />
            <div className='inline-grid gap-2 grid-cols-2 w-full'>
                <input placeholder="Enter categories..." className='w-full pl-2 h-10 bg-slate outline-chateau'></input>
                {/* ref={categories}  */}
                <input  placeholder="Enter tags..." className='w-full pl-2 h-10 bg-slate outline-chateau'></input>
                {/* ref={tags} */}
                <input  placeholder="Enter slug..." className='w-full pl-2 h-10 bg-slate outline-chateau'></input>
                {/* ref={slug} */}
                <input  placeholder="Enter image..." className='w-full pl-2 h-10 bg-slate outline-chateau'></input>
                {/* ref={image} */}
            </div>
            
            <div className='bg-chateau flex justify-center items-center space-x-3 p-3'>
                <button className="bg-tamarillo text-slate rounded-lg p-3" >Submit</button>
                {/* onClick={(e)=>saveToSummaries} */}
                <button className="bg-tamarillo text-slate rounded-lg p-3" >Close</button>
                {/* onClick={() => navigate(-1)} */}
            </div>
        </div>
    
    </>
  )
      
}
 
export default TipTap;