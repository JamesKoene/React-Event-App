import React from 'react';
import ReactDOM from 'react-dom';
import {
  NavLink,
  Link
} from 'react-router-dom'



function Nav () {
  return (
<nav className="navbar navbar-static-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse justify-content-between" id="myNavbar">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" exact activeClassName='active' to="/">Home </NavLink>
          <NavLink className="nav-item nav-link" activeClassName='active' to="/Near-You">Near You</NavLink>
          <NavLink className="nav-item nav-link" activeClassName='active' to="/Genre">Genre</NavLink>
          <NavLink className="nav-item nav-link" activeClassName='active' to="/Coming-Soon">Coming Soon</NavLink>
        </div>
  
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Type Keyword" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
  </div>
</nav>

  )
}


module.exports = Nav;