import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Journal.css'

class JournalList extends Component{
//see here to format dates to something that doesnt look like cat poop

    formatDate = journalDate => {
        let date = new Date (journalDate)
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

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
                    Click to add your trip
                </button>
            </div>
            <section className="journals">
            {
                //sort by date?
                // it is easier to sort by server call

                this.props.journals.map(journals =>
                    <div key={journals.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {/* {this.formatDate(journals.date)} */}
                                {/* {journal.date} */}

                                    <Link className="nav-link" to={`/journals/${journals.id}`}>Details</Link>
                                    </h5>
                                <button
                                    onClick={() => this.props.deletejournal(journals.id)}
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