import React, { Component } from "react"
import "../login/Login.css"

export default class MaybeForm extends Component {
    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }
    // Set initial state
    state = {
        maybeName: "",
        dates: "",
        location: "",
        why: "",
        description: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating event object, and
        invoking the function reference passed from parent component
     */

     //setting default input conditions - throwing alert.   MIND THE BANG!
    constructNewMaybe = evt => {
        evt.preventDefault()
        if (this.state.maybeName === "" ||this.state.location === "" || this.state.dates === "" |this.state.why === "") {
            window.alert("Please input all fields" )
        }

        else {
            const maybe = {
                maybeName: this.state.maybeName,
                dates: this.state.dates,
                location:this.state.location,
                why: this.state.why,
                description: this.state.description,
            }

            // Create the animal and redirect user to animal list
            this.props.addMaybe(maybe).then(() => this.props.history.push("/maybeOneDay"))
        }
    }
//this takes you back after you click to journalS PAGE
handleButtonClick = () => {
    document.location.href = 'http://localhost:3000/maybeOneDay'
}

    render() {
        return (
            <React.Fragment>
                <form className="maybeForm">
                    <div className="form-group">
                        <label htmlFor="maybeName">trip type</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="maybeName"
                            placeholder="hit me"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dates">when to go? </label>
                        <input type="date" required="true"
                            onChange={this.handleFieldChange}
                            id="dates"
                            placeholder="when to getaway"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">location</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="Where o where?"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="why">why</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="why"
                            placeholder="Where o where?"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">description </label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="description"/>
                    </div>
                        <button type="submit" onClick={this.constructNewMaybe}
                        className="btn btn-primary">Submit</button>

                </form>
            </React.Fragment>
        )
    }
}