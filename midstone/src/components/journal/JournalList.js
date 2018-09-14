import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Journal.css'

class JournalList extends Component{
//see here to format dates to something that doesnt look like cat poop

      formatDate = journalDate => {
        let ddates = new Date(journalDate)
        let dayNumbers = [
            "1" , "2", "3", "4", "5", "6", "7", "8,", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
        ]
        let monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        let day = ddates.getDate();
        let monthIndex = ddates.getMonth();
        let year = ddates.getFullYear();

        return monthNames[monthIndex]+' ' + dayNumbers[day]  + ', ' + year;
        // return monthIndex+ '/' +day+ '/'+year;
        //FYI with this commeneted out line, i was getting -1 day and -1 month. Using the array next to variable, i was able to get correct format :)
      }



    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/journals'
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
                                <img style={{ height: 300, width: "auto" }} src={journals.uploadedFileCloudinaryUrl}></img>
                                {/* {journals.ddates}
                                <br/>
                                {journals.rdates} */}

                                    <Link className="nav-link" to={`/journals/${journals.id}`}>Details</Link>
                                    </h5>
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