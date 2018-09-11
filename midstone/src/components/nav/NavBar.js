import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    render() {
        return (





            <div className="wrapper">

            <nav className="sidebar">

            <li className="nav-item">
                        <Link className="nav-link"
                        to="/journals">journal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/maybeOneDay">maybe one day</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/checklist">checklist</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                        to="/cookieJar">fill the cookie jar</Link>
                    </li>
                    <button onClick={() => {
                    localStorage.clear("credentials")
                    document.location.href='http://localhost:3000'
                }}
                    className="logoutButton">Logout</button>

            </nav>
            </div>
                )
                }
    }

    export default NavBar