import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./components/nav/NavBar"

import "bootstrap/dist/css/bootstrap.min.css"



class Midstone extends Component {
    render() {
        return (
            <React.Fragment>
             <NavBar />
                {/* <Header /> */}
                {/* <ApplicationViews /> */}
            </React.Fragment>
        )
    }
}

export default Midstone