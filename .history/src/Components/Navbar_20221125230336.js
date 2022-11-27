import React from 'react'

export default function Navbar() {
    return (
        <div className="nav-container container">
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Signature Program</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Learning</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">#101WomenOnDesk</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Corporate Clients</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Get Involved</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Get Involved</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Testimonial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Donate Now</a>
        </li>
         
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}