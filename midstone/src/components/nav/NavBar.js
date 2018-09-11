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
                        <h3> Travel Intenary</h3>
                    </div>
                    <ul classsName="list-unstyled components">
                        <p>Dummy Heading</p>
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#www.google.com"data-toggle="collapse" >Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">

                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>

                        </div>
                    </nav>
                </div>
            </div>

            //                 <Link className="nav-link"
            //                     to="/journals">journal</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link className="nav-link"
            //                     to="/maybeOneDay">maybe one day</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link className="nav-link"
            //                     to="/checklist">checklist</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link className="nav-link"
            //                     to="/cookieJar">fill the cookie jar</Link>
            //             </li>
            //             <button onClick={() => {
            //                 localStorage.clear("credentials")
            //                 document.location.href = 'http://localhost:3000'
            //             }}
            //                 className="logoutButton">sign out</button>

            // </nav>
            // </div>
        )
    }
}

export default NavBar