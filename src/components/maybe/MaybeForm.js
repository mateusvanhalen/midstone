import React, { Component } from "react"
import "../login/Login.css"

export default class MaybeForm extends Component {

    // Set initial state
    state = {
        maybeName: "",
        dates: "",
        location: "",
        why: "",
        description: "",
        userId: "",
        video: "",
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
        if (this.state.maybeName === "") {
            window.alert("Dont leave any info out!")
        }

        else {
            const maybe = {
                maybeName: this.state.maybeName,
                dates: this.state.dates,
                location:this.state.location,
                why: this.state.why,
                description: this.state.description,
                userId: JSON.parse(localStorage.getItem("credentials")).id,
                video: this.state.video,
            }

            // Create the maybe event and redirect user
            this.props.addMaybe(maybe).then(() => this.props.history.push("/maybes"))
        }
    }
//this takes you back after you click to journalS PAGE
handleButtonClick = () => {
    document.location.href = 'http://localhost:3000/maybes'
}

    render() {
        return (
            <React.Fragment>
                <form className="maybeForm">
                    <div className="form-group">
                        <label htmlFor="maybeName">trip type</label>
                        <input type="text"
                            onChange={this.handleFieldChange}
                            id="maybeName"
                            placeholder="What type of trip?"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dates">when to go? </label>
                        <input type="date"
                            onChange={this.handleFieldChange}
                            id="dates"
                            placeholder="When(ish) to getaway?"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">location</label>
                        <input type="text"
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="Where o where to?"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="why">why</label>
                        <input type="text"
                            onChange={this.handleFieldChange}
                            id="why"
                            placeholder="What's your why?"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">description </label>
                        <input type="text"
                            onChange={this.handleFieldChange}
                            id="description"
                            placeholder="To do what?"/>
                    </div>
                        <button type="submit" onClick={this.constructNewMaybe}
                        className="btn btn-primary">Submit</button>
                       <br/>

                    <div className="form-group">
                        <label htmlFor="video">share a youtube video here for trip prep</label>
                        <input type="url"
                            onChange={this.handleFieldChange}
                            id="video"
                            placeholder="Url to get me in vacation mode"/>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}