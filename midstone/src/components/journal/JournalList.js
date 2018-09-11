import React, { Component } from 'react'
//import events_pic from "events_pic.jpg"
import { Link } from "react-router-dom"
import './Journal.css'

class JournalList extends Component{
//see here to format dates to something that doesnt look like cat poop

    formatDate = eventDate => {
        let date = new Date (eventDate)
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
                            this.props.history.push("/journal/new")}
                        }>
                    Click to add your trip
                </button>
            </div>
            <section className="journals">
            {
                //sort by date?
                // it is easier to sort by server call

                this.props.journals.map(journal =>
                    <div key={journal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {this.formatDate(journal.date)}
                                {/* {journal.date} */}

                                    <Link className="nav-link" to={`/journals/${journal.id}`}>Details</Link>
                                    </h5>
                                <button
                                    onClick={() => this.props.deletejournal(journal.id)}
                                    className="nav-link-quit">Quit journal</button>
                            <h4 className="card-tile">{journal.journalName}
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