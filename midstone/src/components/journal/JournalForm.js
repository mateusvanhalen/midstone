import React, { Component } from "react"
import "../login/Login.css"

export default class JournalForm extends Component {

    // Set initial state
    state = {
        pic: "",
        journalName: "",
        ddates: "",
        rdates: "",
        location: "",
        rating: "",
        description: "",
        userId: "",
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
                pic:this.state.pic,
                journalName: this.state.journalName,
                ddates: this.state.ddates,
                rdates:this.state.rdates,
                location: this.state.location,
                rating: this.state.rating,
                description: this.state.description,
                userId: JSON.parse(localStorage.getItem("credentials")).id,
            }

            // Create the journal entry and redirect user to journal list
            this.props.addJournal(journal).then(() => this.props.history.push("/journals"))
        }
    }
//this takes you back after you click to journalSubmit
handleButtonClick = () => {
    document.location.href = 'http://localhost:3000/journals'
}

    render() {
        return (
            <React.Fragment>
                <form className="journalForm">
                <div className="form-group">
                        <label htmlFor="pic">add a pic url</label>
                        <input type="url" required
                            onChange={this.handleFieldChange}
                            id="pic"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="journalName">trip type</label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="journalName"
                            placeholder="journal"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ddates">departure </label>
                        <input type="date" required
                            onChange={this.handleFieldChange}
                            id="ddates"
                            placeholder="Select departure date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rdates">return </label>
                        <input type="date" required
                            onChange={this.handleFieldChange}
                            id="rdates"
                            placeholder="Select return date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">location</label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="Add location"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">Rating </label>
                                <div>
                                    <label>
                                        <input type="radio" name="stars" value="1"
                                        onChange={this.handleFieldChange}/>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="2"
                                        onChange={this.handleFieldChange}/>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="3"
                                        onChange={this.handleFieldChange}/>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="4"
                                        onChange={this.handleFieldChange}/>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="5"
                                        onChange={this.handleFieldChange}/>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">description </label>
                        <input type="text" required
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