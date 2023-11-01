import '../styles/header.css'
import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        <div className='headercontainer'>
            <div className='t'><h1>Blog List</h1></div>
            <div className='o'>
            <Link to="/" className='li'>Home</Link>
            <Link to='/about' className='li'>About</Link>
            <Link to='/contact' className='li'>Contact</Link>
        </div>
        </div>
    )
}
export default Header