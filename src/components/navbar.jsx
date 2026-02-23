import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/login" className="nav-link active" aria-current="page">Sign in</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" aria-current="page">Register</Link>
          </li>
          
        </ul>
      </header>
    </div>
  )
}

export default Navbar
