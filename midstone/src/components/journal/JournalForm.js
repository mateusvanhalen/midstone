import React, { Component } from "react"
import "../login/Login.css"

export default class JournalForm extends Component {
    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }
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
        if (this.state.dates === "" ||this.state.location === "" || this.state.description === "" ) {
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
                        <label htmlFor="journalName">trip type</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="journalName"
                            placeholder="journal"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dates">departure </label>
                        <input type="date" required="true"
                            onChange={this.handleFieldChange}
                            id="dates"
                            placeholder="Select departure date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dates">return </label>
                        <input type="date" required="true"
                            onChange={this.handleFieldChange}
                            id="dates"
                            placeholder="Select return date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">location</label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="Add location"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating </label>
                                <form>
                                    <label>
                                        <input type="radio" name="stars" value="1" />
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="2" />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="3" />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="4" />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="5" />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                </form>

                            onChange={this.handleFieldChange}
                            id="rating"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">description </label>
                        <input type="text" required="true"
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