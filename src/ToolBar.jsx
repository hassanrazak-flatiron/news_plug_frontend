import { FaListOl, FaListUl, FaParagraph, FaQuoteLeft, FaRedo, FaUndo, FaBold, FaItalic, FaStrikethrough, FaHeading, FaArrowDown, FaPen,} from "react-icons/fa"


const ToolBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    return (
        <>
         <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
                className='toolbar'
            >
                <FaUndo />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                className='toolbar'
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            >
                <FaRedo />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('font-bold') ? 'is-active' : 'toolbar'}
            >
                <FaBold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? 'is-active' : 'toolbar'}
            >
                <FaItalic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={editor.isActive('strikethrough') ? 'is-active' : 'toolbar'}
            >
                <FaStrikethrough />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : 'toolbar'}
            >
                <FaListUl />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : 'toolbar'}
            >
                <FaListOl />
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : 'toolbar'}
            >
                <FaParagraph />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : 'toolbar'}
            >
                <FaHeading />
            </button>
          
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : 'toolbar'}
            >
                <FaQuoteLeft />
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className='toolbar'
            >
                <FaPen />
            </button>
            <button onClick={() => editor.chain().focus().setHardBreak().run()}
                className='toolbar'
            >
                <FaArrowDown />
            </button>
    </>
  )
    
}

 
export default ToolBar;