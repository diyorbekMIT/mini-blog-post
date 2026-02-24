import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { removeStorage } from "../helpers/setStorage"
import { logOutUser } from '../slice/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';



const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOut(){
          removeStorage("token");
          dispatch(logOutUser())
          navigate("/login");
      }
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-2 border-bottom">
        <Link
         to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Simple header</span>
        </Link>
        
        {loggedIn ? (
          <>
           <p className="me-py-2 text-dark text-decoration-none" username="">{user.username}</p>
<button className="btn btn-outline-danger" onClick={handleLogOut}>Logout</button>

        </>) : (
          <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/login" className="nav-link active" aria-current="page">Sign in</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" aria-current="page">Register</Link>
          </li>
          
        </ul>
        )} 
        
      </header>
    </div>
  )
}

export default Navbar
