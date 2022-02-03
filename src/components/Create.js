import { useState } from "react";
import { useHistory } from "react-router";
const Create=()=>{
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('nari');
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            history.push('/add');
        })
    
    }
    return(
        <div className='create'>
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title :</label>
                <input type='text' required 
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  />
                <label>Body:</label>
                <textarea required
                  value={body}
                  onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Author :</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value='kani'>Kani</option>
                    <option value='sas'>Sas</option>
                    <option value='nammu'>Nammu</option>
                </select>
                <button >Add Blog</button>
             
            </form>

        </div>
    );
}
export default Create;