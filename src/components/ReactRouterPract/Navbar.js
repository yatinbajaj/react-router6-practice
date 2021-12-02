import React from 'react'
import "./Navbar.css"
import { Link,NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="header">
            <div className="logo">Bookkeeper</div>
            <nav className="main-nav">
                <Link to="/">Home</Link>
                {/*<Link to="/invoices">Invoices</Link>*/}
                <NavLink
                    style={({isActive})=>isActive?{background:"yellow"}:{background:"pink"}}
                    to="/invoices">Invoices</NavLink>
                <Link to="/expenses">Expenses</Link>
            </nav>
        </header>
    )
}

export default Navbar
