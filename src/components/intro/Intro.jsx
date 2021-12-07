import React from 'react'
import './Intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

function Intro() {
    const textRef = useRef();
    // useRef is a hook - like a “box” that can hold a mutable value in its .current property.
    
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Creator", "Engineer", "Enthusiast"],
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
                    <h1>Jordan Smith</h1>
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
