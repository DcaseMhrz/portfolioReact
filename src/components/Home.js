import React from 'react'
import image from "../image/pplinkedin.jpeg"

const Home = () => {
    return (
        <div className="container ">
            <div className="row mt-5">
                <div className="col mt-5 text-center">
                    <img src={image} alt="profile" className="" height={300} width={300} style={{ borderRadius: "50%", border: "3px solid green" }} />
                </div>
                <div className="col mt-5 mb-5" >
                    <h1 style={{ cursor: "default", fontSize: "50px", textShadow: "2px 4px #b0bec5" }}>DIKESH MAHARJAN</h1>
                    <div className="container mt-5">
                        <div className="row mt-5">
                            <div className="col text-end" style={{ borderRight: "1px solid" }}><strong>Titles</strong></div>
                            <div className="col">
Full Stack Developer<br/>Software Engineer<br/>Programmer
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col text-end" style={{ borderRight: "1px solid" }}><strong>Birthday</strong></div>
                            <div className="col text-start">18 January, 1998</div>
                        </div>
                        <div className="row mt-5">
                            <div className="col text-end" style={{ borderRight: "1px solid" }}><strong>Location</strong></div>
                            <div className="col text-start">Sydney, Australia</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home