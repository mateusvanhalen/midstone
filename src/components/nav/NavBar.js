import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    render() {
        return (

            <div className="navbar navbar-light fixed-top light-blue flex-lg-nowrap p-4 shadow">
                <div className="navbar-nav mr-auto">
                    <h4> Utripn</h4>
                </div>
                <h5>
                    <ul className="nav nav-pills">

                        <li className="active">
                            <Link className="nav-link"
                                to="/journals">journal / home</Link>
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
                    </ul></h5>
                <div id="content">
                    <div className="container-fluid">
                        <button onClick={() => {
                            localStorage.clear("credentials")
                            document.location.href = 'http://localhost:3000'
                        }}
                            className="logoutButton">sign out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar