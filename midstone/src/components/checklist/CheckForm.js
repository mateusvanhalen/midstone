import React, { Component } from "react"
import "../login/Login.css"

export default class CheckForm extends Component {

    // Set initial state
    state = {
        type: "",
        location: "",
        item: "",
        why: "",
    }
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    constructNewCheck = evt => {
        evt.preventDefault()
        if (this.state.type === "" || this.state.location === "" || this.state.item === "" || this.state.why === "" ) {
            window.alert("Oops you missed something" )
        }

        else {
            const check = {
                type:this.state.type,
                location: this.state.location,
                item: this.state.item,
                why:this.state.why,
            }
            this.props.addCheck(check).then(() => this.props.history.push("/checklists"))
        }
    }
//this takes you back after you click to journalSubmit
handleButtonClick = () => {
    document.location.href = 'http://localhost:3000/checklists'
}

render() {
    return (
        <React.Fragment>
            <form className="CheckForm">
            <div className="form-group">
                    <label htmlFor="type">add a type of trip</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="enter type of trip"/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">where at</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="location"
                        placeholder="enter location"/>
                </div>
                <div className="form-group">
                    <label htmlFor="item">what items do you recommend?</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="item"
                        placeholder="enter item"/>
                </div>
                <div className="form-group">
                    <label htmlFor="why">why and how</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="why"
                        placeholder="enter why and how"/>
                </div>
                    <button type="submit" onClick={this.constructNewCheck}
                    className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    )
}
}