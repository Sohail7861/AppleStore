import React from 'react'
import {Link} from 'react-router-dom'
import Cartbtn from './buttons/Cartbtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

function Navbar() {
  return (
    <>
          <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
              <div className="container">
                  <a className="navbar-brand fw-bold fs-4" href="#">iSTORE</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to='/products' className="nav-link">Products</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/about" className="nav-link" >About</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/contact">Contact</Link>
                          </li>
                         
                          
                      </ul>
                      {/**<div className="buttons">
                        <a href="" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1"> Login</i>
                        </a>
                        <a href="" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-1"> Register</i>
                        </a>
                        <a href="" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart me-1"> Cart(0)</i>
                        </a>
                      </div>
  **/}
                    <Link className="navbar-brand mx-auto fw-bold" to="/">Latest Releases!</Link>
                    <Login/>
                    <Signup/>
                    <Cartbtn/>
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Navbar