import React from 'react'
import "../Css/Slider.css"
import Navbar from "../Components/Navbar"
export default function Slider() {
    return (
        <>
            <div className="set-slider">
                <Navbar />
                <div id="carouselExampleCaptions" className=" carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner container">
                        <div className="carousel-item active">
                            <div>
                                <h1>Support us in furthering our mission 2</h1>
                                <h1><strong>Develop Women Leaders</strong> of the next generation</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <h1>Support us in furthering our mission 3</h1>
                                <h1><strong>Develop Women Leaders</strong> of the next generation</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <h1>Support us in furthering our mission</h1>
                                <h1><strong>Develop Women Leaders</strong> of the next generation</h1>
                            </div>
                        </div>
                    
                    </div>
                    <div className="sliders-btn">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="container text-center slider-footer">
                <div className="container">
                    <h2><strong>WINGS</strong> Women Initiative to Nature Growth to Success</h1>
                </div>
            </div>
        </>
    )
}
