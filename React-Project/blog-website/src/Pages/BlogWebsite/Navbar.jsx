import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
  <div className='MyNavbar'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to ="/">My Blog</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavTarget">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="NavTarget">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <NavLink class="nav-link " to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
          <li class="nav-item">
          <NavLink class="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/Contact">Contact</NavLink>
        </li>
      </ul>

      <form class="d-flex ms-5">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar