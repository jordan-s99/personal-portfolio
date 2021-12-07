import React from 'react'
import './Topbar.scss'
//import {ComputerIcon} from '@mui/icons-material/Computer';



function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                <a href="#intro" className="logo">genius.</a>
                <div className="itemContainer">
                   
                    <span>01234 678 910</span>
                </div>
                
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
