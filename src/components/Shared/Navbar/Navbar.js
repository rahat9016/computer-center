
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Navbar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5">
    <div className="container">
      <Link className="navbar-brand text-white fs-2 d-flex align-items-center" to="/home"><i class="fas fa-tv"></i> <h5 className="ms-3">Computer <br/> Center</h5></Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {<img src={loggedInUser.photoURL} style={{borderRadius:'50%',width:'50px'}}/> || <span className="navbar-toggler-icon"></span>}
      </button>
      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white me-5" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white me-5" to="/aboutUs" >About us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white me-5">Project</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white me-5">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white me-5" to="/admin">Dashboard</Link>
          </li>
          <li className="nav-item"> 
          {
            loggedInUser.email ? <img src={loggedInUser.photoURL} style={{borderRadius:'50%',width:'50px'}}/> :<Link className="nav-link text-white brand-btn px-3 py-2 text-center btn" to="/login">Login</Link> 
          }
             
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
    );
};

export default Navbar;