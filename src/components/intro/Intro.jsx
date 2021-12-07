import React from 'react'
import './Intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Creator", "newbie"],
        });
       

    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/barley.png" alt="laptop, fruit" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Jordan Ellie Smith</h1>
                    <h3>Software <span ref={textRef}> 
                        </span></h3>
                
                <a href="#portfolio">
                    <img  src="../assets/down.png" alt="" />
                </a>
                </div>
            </div>
        </div>
    )
}

export default Intro;