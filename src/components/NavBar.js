import{Link} from 'react-router-dom';
const NavBar=()=>{
    return(
        <nav className='navbar'>
            <h1>Rainbow Blog</h1>
            <div className='links'>
                <Link to="/" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    backgroundRadius:'8px'
                }}>Home</Link>
                
            </div>
        </nav>
    )
}
export default NavBar;