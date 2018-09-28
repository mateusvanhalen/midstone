import React, { Component } from "react"
import "../login/Login.css"
import './CookieJar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class CookieJarForm extends Component {

state = {
    cookieName: "",
    location: "",
    total: "",
    ddates: "",
    weeksTil: "",

}
handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}
constructNewCookieJar = evt => {
    evt.preventDefault()
    if(this.state.cookieName === "") {
        window.alert("You missed the name!")
    }

    else {
        const cookieJars = {
            cookieName: this.state.cookieName,
            location: this.state.location,
            total: this.state.total,
            weeksTil: this.state.weeksTil,
            ddates: this.state.ddates,
            userId: JSON.parse(localStorage.getItem("credentials")).id,
        }
        this.props.addCookieJars(cookieJars).then(() => this.props.history.push("/cookieJars"))
        }
    }
        handleButtonClick = () => {
            document.location.href = 'http://localhost:3000/cookieJars'
        }
        render() {
            return (
                <React.Fragment>
                    <form className="cookieForm">
                    <div className="form-group">
                        <label htmlFor="cookieName">Name of trip</label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="cookieName"
                            placeholder="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Where to?</label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="location" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="total">total est. cost($)</label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="total"
                            placeholder="total" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ddates">est. departure date </label>
                        <input type="date" required
                            onChange={this.handleFieldChange}
                            id="ddates"
                            placeholder="dates" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="weeksTil">how many weeks out?</label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="weeksTil"
                            placeholder="How many weeks out?" />
                    </div>

                    <button type="submit" onClick={this.constructNewCookieJar}
                        className="btn btn-primary">Submit</button>
                          </form>
            </React.Fragment>
        )
    }
}
