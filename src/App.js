import './style.css';
import { useState ,useRef} from 'react';
import {db} from "./firebaseInit";
import { collection, addDoc } from "firebase/firestore"; 



function App() {
  // const [title,setTitle]=useState("");
  // const [content,setContent]=useState("");
  const [formData,setformData]=useState({title:"",content:""})

  const [blogs,setBlogs]=useState([]);
  const titleRef=useRef(null);

  async function SubmitData(e){
  e.preventDefault();
  // console.log([{title,content},...blogs]);
  // Add a new document with a generated id.

// console.log("hyyyyyyyyy")


  // setBlogs([{title,content}, ...blogs]);
  setBlogs([{title: formData.title,content:formData.content}, ...blogs]);
  // setTitle("");
  // setContent("");
  console.log(blogs);
  titleRef.current.focus();

  const docRef = await addDoc(collection(db, "Blog"), {
    Content: content,
    Title: title,
    createAt : new Date()
  });
  setformData({title:"",content:""});

  }

  function Removeblog(i){
    setBlogs(blogs.filter((blog,index)=>i!==index));
  }
  return (
   <> 
    <div className="Main">

         <div className="Second">
          <form onSubmit={SubmitData}> 
            <h1 className='title'>Title</h1>
          <input className='Inp' type='text' placeholder='Write Title....'
          // value={title} 
          // onChange={(e)=>setTitle(e.target.value)}
          value={formData.title}
          onChange = {(e) => setformData({title: e.target.value, content:formData.content})}

          ref={titleRef}
          />
          
          <h1 className='Content'>Content</h1>
          <input className='Inp1' type='text' placeholder='Write Content...'
            // value={content} onChange={(e)=>setContent(e.target.value)}
            value={formData.content}
            onChange = {(e) => setformData({title: formData.title,content: e.target.value})}
          />
         <button className='bt1'>Add</button>
         </form>
         </div>
        
    </div>
    <hr/>
       <h1 className='Blogs'>Blogs</h1>
       {blogs.map((blog,i)=>(
        <div className='blg'><br/>
        <h1 className='blog_t'>Title: {blog.title}</h1>
        <h1 className='content'>Content : {blog.content}</h1>
        <button className='Del' onClick={()=>Removeblog(i)}>Delete</button>
        </div>
       ))}
       
       
       </>
  );
}

export default App;
