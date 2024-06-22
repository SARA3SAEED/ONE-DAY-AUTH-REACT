import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {



  
  return (
    <div className="navbar bg-base-100">

      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">BookStore</Link>
      </div>

      <div className="navbar-end">
        <Link to="/SignUp" className="btn m-2">SignUp</Link>
        <Link to="/LogIn" className="btn m-2">LogIn </Link>
      </div>

    </div>
  )
}
