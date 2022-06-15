import { useEffect, useState } from 'react';
import './Editor.scss'
// import Quill from 'quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button}from '@mui/material';



const Editor = () => {

    const [tags, setTags] = useState('');

   const  modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]



  return (
    <>
    <div className="toolbar" id = "toolbar"></div>
    <div className = "container" id = "container">
        <ReactQuill theme="snow" value={tags} onChange={setTags} className = "editor2"  modules={modules}    formats={formats} >

          <div className="editor"></div>

        </ReactQuill>
        <Button onClick = {()=> console.log(typeof value)}>Click here</Button>
    </div>
    {/* <div className="read-only">
      <ReactQuill value = {value} readOnly={true} theme = "bubble"/>
    </div> */}
    </>

  )
}

export default Editor
  