import {Link} from 'react-router-dom';
const BlogList=(props)=>{
    const blogs=props.blogs;
    const title=props.title;

    return(
        <div className='blog-list'>
            <h1 style={{color:"red",textAlign:"left"}}>{title}</h1>
        {blogs.map(user => (
            <div className='blog-preview' key={user.id}>
                <Link to={`/blogs/${user.id}`}>
                <h2>{user.title}</h2>
                <h3>Written by {user.author} </h3>
                </Link>
               
            </div>
        ))}
        </div>
    )
}
export default BlogList;