import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Journal.css'


class JournalList extends Component{
//see here to format dates to something that doesnt look like cat poop



      formatDate = journalDate => {
        let ddates = new Date (journalDate)
        var dayNames = ["1", "2", "3", "4,", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var dayIndex = ddates.getDate();
        var monthIndex = ddates.getMonth();
        var year = ddates.getFullYear();

        return monthNames[monthIndex] + ' ' + dayNames[dayIndex] + ', ' + ' ' + year;

      }


    render() {
        return (<React.Fragment>
            <div className="journalButton">
                <button
                type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push("/journals/new")}
                        }>
                    Log a new trip
                </button>
                <br/>
            </div>

            <section className="journals">
            {// sort by server call, it is easier
                this.props.journals.map(journals =>
                    <div key={journals.id} className="card">
                        <div className="card-body">
                            <h3 className="card-title">{journals.journalName}</h3>
                            <h4>
                {`departed:`}  {this.formatDate(journals.ddates)}
                                <br/><br/>
                {`returned:`}  {this.formatDate(journals.rdates)}
                                {/* {journals.ddates}
                                <br/>
                                {journals.rdates} */}
                                    <br/><br/>
                                    <Link className="btn btn-info" to={`/journals/${journals.id}`}>Details</Link><br/><br/>
                                    </h4>
                                    <img src={journals.uploadedFileCloudinaryUrl} style={{height: "300px", width: "auto" }}/>
                                    <br/><br/>

                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}

export default JournalList;