import React from "react"
import logo from '../logo.svg'

function Navbar () {
    return (
        <nav className="nav-bar">
            <img src={logo} className="nav-logo" />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project</h4>
        </nav>
    )
}

export default Navbar