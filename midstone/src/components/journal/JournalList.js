import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Journal.css'

class JournalList extends Component{
//see here to format dates to something that doesnt look like cat poop

    formatDate = journalDate => {
        let rdates = new Date (journalDate)
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day = rdates.getDate();
        var monthIndex = rdates.getFullMonth();
        var year = rdates.getYear();

        // return day + ' ' + monthNames[monthIndex] + ' ' + year;
        return monthIndex+- '/' +day+- '/'+year;
      }

      formatDate = journalDate => {
        let ddates = new Date (journalDate)
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day = ddates.getDate();
        var monthIndex = ddates.getMonth();
        var year = ddates.getFullYear();

        // return day + ' ' + monthNames[monthIndex] + ' ' + year;
        return monthIndex+ '/' +day+ '/'+year;
      }


    render() {
        return (<React.Fragment>
            <div className="journalButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/journals/new")}
                        }>
                    Log a new trip
                </button>
            </div>
            <section className="journals">
            {
                // sort by server call, it is easier
                this.props.journals.map(journals =>
                    <div key={journals.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                {`departed:`}  {this.formatDate(journals.ddates)}
                                <br/>
                {`returned:`}  {this.formatDate(journals.rdates)}
                                {/* {journals.ddates}
                                <br/>
                                {journals.rdates} */}

                                    <Link className="nav-link" to={`/journals/${journals.id}`}>Details</Link>
                                    </h5>
                                <button
                                    onClick={() => this.props.deleteJournal(journals.id)}
                                    className="nav-link-quit">Delete journal entry</button>
                            <h4 className="card-tile">{journals.journalName}
                                </h4>
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}

export default JournalList;