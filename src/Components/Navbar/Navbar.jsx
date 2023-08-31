import React from 'react'
import grp1 from '../../Assets/Group 1.png'
import frame from '../../Assets/Frame.png'

function Navbar() {
  return (
    <div className='container-fluid' style={{backgroundColor: '#F0FFF0'}}>
      <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src={grp1}alt="Bootstrap" width="120" height="40"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Books</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Courses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Others</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Blog</a>
                        </li>
                        <li class="nav-item">
                            
                            <a href="/" class="btn btn-success px-4">Sign In</a>
                        </li>
                    </ul>
                    
                </div> 
            </div>
        </nav>
        <div className="container my-5" id="after-nav">
        <div className="row flex-column-reverse flex-lg-rowgit ">
          <div className="col-12 col-sm-10 col-md-10 col-lg-6">
            <p style={{ color: 'red' }}>Are you ready to Learn?</p>
            <h1 style={{ fontSize: '70px' }}>Learn With fun on <span style={{ color: 'rgba(34, 185, 118, 1)' }}>any
              schedule</span></h1>
            <p style={{ marginTop: '14px' }}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Varius
              blandit facilisis quam netus.</p>
            <a href="/" className="btn btn-success px-4">Get Started</a>
          </div>
          <div className="col-12 col-sm-10 col-md-10 col-lg-6 my-3">
            <img src={frame} width="554px" height="346px" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
