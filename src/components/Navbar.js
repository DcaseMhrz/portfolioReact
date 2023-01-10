import React from 'react'
import { BriefcaseFill, PersonFill, Stack, MortarboardFill, ShareFill } from 'react-bootstrap-icons';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import Technology from './Technology';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-auto bg-light sticky-top">
                    <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                        <br />
                        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link py-3 px-2" title="Profile" >
                                    <i className="fs-2"><PersonFill /></i><br />Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/technology" className="nav-link py-3 px-2" title="Technology" >
                                    <i className=" fs-2"><BriefcaseFill /></i><br />Technology
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link py-3 px-2" title="Projects">
                                    <i className=" fs-2"><Stack /></i><br />Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link py-3 px-2" title="Education">
                                    <i className=" fs-2"><MortarboardFill /></i><br />Education
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link py-3 px-2" title="Connect" >
                                    <i className=" fs-2"><ShareFill /></i><br /> Connect
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm p-3 min-vh-100">
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route exact path="/technology" element={<Technology />} />
                    </Routes>
                    


                </div>
            </div>
        </div>
    </>
    )
}

export default Navbar