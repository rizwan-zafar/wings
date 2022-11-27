import React from 'react'
import "../Css/Slider.css"
import Navbar from "../Components/Navbar"
export default function Slider() {
    return (
        <div className="set-slider">
            <Navbar />
            <h1>working</h1>
            <div id="carouselExampleCaptions" className=" carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner container">
                    <div className="carousel-item active">
                        {/* <img src="https://thumbs.dreamstime.com/b/happy-active-kids-group-six-boys-team-sitting-grass-balls-smiling-sunny-summer-day-33824066.jpg" className="d-block w-100" alt="..." /> */}
                        <div>
                            <h2>Support us in furthering our mission</h2>
                            <h2><strong>Develop Women Leaders</strong> of the next generation</h2>
                        </div>
                    </div>
                </div>
                <div>
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
    )
}
