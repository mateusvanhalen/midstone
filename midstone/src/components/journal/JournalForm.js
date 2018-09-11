import React, { Component } from "react"
import "../login/Login.css"

export default class JournalForm extends Component {

    // Set initial state
    state = {
        journalName: "",
        dates: "",
        location: "",
        rating: "",
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
    constructNewJournal = evt => {
        evt.preventDefault()
        if (this.state.journalName === "" ||this.state.dates === "" || this.state.location === "" || this.state.rating === "" ) {
            window.alert("Please input all fields" )
        }

        else {
            const journal = {
                journalName: this.state.journalName,
                dates: this.state.dates,
                location: this.state.location,
                rating: this.state.rating,
                description: this.state.description,
            }

            // Create the animal and redirect user to animal list
            this.props.addJournal(journal).then(() => this.props.history.push("/journals"))
        }
    }
//this takes you back after you click to journalS PAGE
handleButtonClick = () => {
    document.location.href = 'http://localhost:3000/journals'
}

    render() {
        return (
            <React.Fragment>
                <form className="journalForm">
                    <div className="form-group">
                        <label htmlFor="journalName">journal name</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="journalName"
                            placeholder="journal"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Dates </label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="dates"
                            placeholder="Type dates"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Location</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="Add location"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating </label>
                        <input type="rating" required="true"
                             onChange={this.handleFieldChange}
                             id="rating"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Description </label>
                        <input type="description" required="true"
                            onChange={this.handleFieldChange}
                            id="description"/>
                    </div>
                        <button type="submit" onClick={this.constructNewJournal}
                        className="btn btn-primary">Submit</button>

                </form>
            </React.Fragment>
        )
    }
}