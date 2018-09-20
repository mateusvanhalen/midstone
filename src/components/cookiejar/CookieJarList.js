import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class CookieJarList extends Component{

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
        <div className="cookieButton">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/cookieJars/new")}
                    }>
                Consult the cookie jar
            </button>
            <br/>
        </div>
        <section className="cookieJars">
        {
            // sort by server call, it is easier
            this.props.cookieJars.map(cookieJars =>
                <div key={cookieJars.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
            {`weeks to go:`}  {cookieJars.weeksTil}
            <br/>
            {`until `} {this.formatDate(cookieJars.ddates)}
                            <br/>
            {`save this per week:`}  {cookieJars.total} <br/>
            {`or save this per day:`}
                                <br/>
                                <Link className="btn btn-info" to={`/cookieJars/${cookieJars.id}`}>Details</Link>
                                </h5>

                    </div>
                </div>
            )
        }
        </section>

        </React.Fragment>
)
}}