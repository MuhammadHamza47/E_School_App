import React from 'react'
import img6 from '../../Assets/Rectangle 6.png'
import img13 from '../../Assets/Rectangle 13.png'
import img15 from '../../Assets/Rectangle 15.png'

function Courses() {
  return (
    <>
    <div className="container">
        <div className="row text-center py-4">
            <div className="col">
                <h1 style={{fontWeight: 700}}>Online Coueses</h1>
            </div>
        </div>
        <div className="row" id="course">
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card shadow-lg p-3 mb-5 bg-white rounded" id="card-shadow">
                    <img src={img6} className="img-fluid card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Modern Psychology</h5>
                        <p className="card-text">Designation</p>
                        <a href="/" className="btn btn-success px-4">Buy Course</a>
                    </div>
                    <div className="icon">
                        <p><i className="bi bi-calendar-week mx-2"></i>Start 20 April, 2021</p>
                        <p style={{marginRight: 6}}><i className="bi bi-people mx-2"></i>60 seats</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card shadow-lg p-3 mb-5 bg-white rounded" id="card-shadow">
                    <img src={img13} className="img-fluid card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Designation</p>
                        <a href="/" className="btn btn-success px-4">Buy Course</a>

                    </div>
                    <div className="icon">
                        <p><i className="bi bi-calendar-week mx-2"></i>Start 20 April, 2021</p>
                        <p style={{marginRight: 6}}><i className="bi bi-people mx-2"></i>60 seats</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card shadow-lg p-3 mb-5 bg-white rounded" id="card-shadow" >
                    <img src={img15} className="img-fluid card-img-top m-1 " alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Designation</p>
                        <a href="/" className="btn btn-success px-4" id="">Buy Course</a>
                    </div>
                    <div className="icon">
                        <p><i className="bi bi-calendar-week mx-2"></i>Start 20 April, 2021</p>
                        <p style={{marginRight: 6}}><i className="bi bi-people mx-2"></i>60 seats</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Courses
