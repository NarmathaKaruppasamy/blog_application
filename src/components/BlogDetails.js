import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails =()=>{
    const {id}=useParams();
    const {data :blog ,error, isBending}=useFetch(' http://localhost:8000/blogs/'+id)
    const history=useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/' +blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/delete')
        })

    }
    
    return (
        <div className='blog-details'>
            {isBending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
            
        </div>
    );
}
export default BlogDetails;