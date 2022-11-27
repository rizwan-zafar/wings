import React from 'react'

export default function Navbar() {
  // return (
  //   <div className="nav-container container">
  //     <nav className="navbar navbar-expand-lg navbar-dark">
  //       <div className="container-fluid">
  //         <a className="navbar-brand" href="/">Navbar</a>
  //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="collapse navbar-collapse" id="navbarNav">
  //           <ul className="navbar-nav ms-auto">
  //             <li className="nav-item">
  //               <a className="nav-link active" aria-current="page" href="/">Home</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/">About Us</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/">Signature Program</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/">Learning</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/">#101WomenOnDesk</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/">Corporate Clients</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/">Get Involved</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/">Get Involved</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="/">Testimonial</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link btn " href="/">Donate Now</a>
  //             </li>

  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
