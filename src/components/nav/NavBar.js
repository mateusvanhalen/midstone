import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    render() {
        return (

            <div className="wrapper">

                <nav className="sidebar">
                    <div className="sidebar-header">
                        <h4> Utripn</h4>
                    </div>
                    <ul className="list-unstyled components">
                        <p>Here are your bags</p>
                        <li className="active">
                        <Link className="nav-link"
                                to="/journals">journal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                            to="/maybes">maybe one day</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                            to="/checklists">checklist</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                            to="/cookieJars">fill the cookie jar</Link>
                    </li>


                            </ul>

                <div id="content">


                    <nav className="navbar navbar-expand-lg navbar-light bg-light">


                        <div className="container-fluid">
                        <button onClick={() => {
                        localStorage.clear("credentials")
                        document.location.href = 'http://localhost:3000'
                    }}
                        className="logoutButton">sign out</button>

                        </div>
                    </nav>
                </div>
            </nav>
        </div>



        )
    }
}

export default NavBar