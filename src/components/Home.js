import BlogList from './BlogList'
import useFetch from "./useFetch";
const Home=()=>{

  const {data,isBending,error}=useFetch('http://localhost:8000/blogs');
    
    return(
        <div className='home'>
          {error && <div>{error}</div>}
          {isBending && <div>Loading.....</div>}
          {data && <BlogList blogs={data} title='All blogs'/>}
        </div>
    );
}
export default Home;