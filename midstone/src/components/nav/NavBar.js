import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
            <li className="nav-item">
                        <Link className="nav-link" to="/journal">journal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/maybeOneDay">maybe one day</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/checklist">checklist</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cookieJar">fill the cookie jar</Link>
                    </li>
                    <button onClick={() => {
                    localStorage.clear("credentials")
                    document.location.href='http://localhost:3000'
                }}
                    className="logoutButton">Logout</button>

            </nav>
                )
                }
    }

    export default NavBar