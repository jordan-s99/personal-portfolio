import React from 'react'
import './Topbar.scss'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

//import {ComputerIcon} from '@mui/icons-material/Computer';



function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                <a href="#intro" className="logo">js.</a>
                {/* <div className="itemContainer"> */}
               
                    <a href="https://github.com/jordan-s99"><AiFillGithub size={35} /></a>
                    <a href="https://github.com/jordan-s99" className="navbar-text">jordan-s99</a>
                    <a href="https://www.linkedin.com/in/jordan-s-60b1009b/"><AiFillLinkedin size={35} /></a>
                    <a className="navbar-text" href="https://www.linkedin.com/in/jordan-s-60b1009b/">Jordan Smith</a>
                    
                
                
                </div>
                
                <div className="right">
                   <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                       <span className="line1"></span>
                       <span className="line2"></span>
                       <span className="line3"></span>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
