import React from 'react'
import javascript from '../image/javascript.png'
import python from '../image/python.png'
import java from '../image/java.png'
import php from '../image/php.png'
import html from '../image/html.png'
import css from '../image/css.png'
import csharp from '../image/csharp.png'

const Technology = () => {
    return (
        <div className='container'>
            <h1 class="text-center">Technology</h1>
            <div className="container">
                <h3 >Languages</h3>
                <div className="row text-center mt-3">
                    <div class="card" style={{width:"10rem ",border:"none"}}>
                        <img src={javascript} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Javascript</h5>
                                
                            </div>
                    </div>
                    <div class="card" style={{width:"10rem",border:"none"}}>
                        <img src={python} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Python</h5>
                                
                            </div>
                    </div>
                    <div class="card" style={{width:"10rem",border:"none"}}>
                        <img src={java} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Java</h5>
                                
                            </div>
                    </div>
                    <div class="card" style={{width:"10rem",border:"none"}}>
                        <img src={php} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">php</h5>
                                
                            </div>
                    </div>
                    <div class="card" style={{width:"10rem",border:"none"}}>
                        <img src={html} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">HTML</h5>
                                
                            </div>
                    </div>
                    <div class="card" style={{width:"10rem",border:"none"}}>
                        <img src={css} class="card-img-top" height="90%" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">css</h5>
                                
                            </div>
                    </div>
                    <div class="card" style={{width:"10rem",border:"none"}}>
                        <img src={csharp} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">C#</h5>
                                
                            </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 >Tools</h3>
                <div className="container">

                </div>
            </div>
            <div className="container">
                <h3 >Frameworks</h3>
                <div className="container">

                </div>
            </div>
            <div className="container">
                <h3 >Data</h3>
                <div className="container">

                </div>
            </div>

        </div>
    )
}

export default Technology