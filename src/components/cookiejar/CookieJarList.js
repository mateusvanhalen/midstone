import React, { Component } from 'react'
// import { Link } from "react-router-dom"



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
                    className="btn btn-info"
                    onClick={() => {
                        this.props.history.push("/cookieJars/new")}
                    }>
                But how many cookies?
            </button>
            <br/>
        </div>
        <section className="cookieJars">
        {

            // sort by server call, it is easier
            this.props.cookieJars.map(cookieJars =>
                <div key={cookieJars.id} className="card">
                    <div className="cookie-body">
                        <h2 className="card-title">
            {`Trip reminder for `}{cookieJars.cookieName}{` trip to `}{cookieJars.location}
            <br/>{`   check this out...`}
            <br/></h2><h5>
            {`Just put about $`}{Math.round(cookieJars.total / cookieJars.weeksTil) }{` per week for `} {cookieJars.weeksTil}{` weeks in your cookie jar, and you will have the cash!`}

            <br/>
            {`is the rough date for departure still around `} {this.formatDate(cookieJars.ddates)}{` and you still thinkin about `}{cookieJars.total}{` bucks?`}
            <br/>
            <br/>
            {`-or-`}
            <br/>
            <br/>
            <a
                                onClick={() => this.props.deleteCookieJar(cookieJars.id)
                                    .then(() => this.props.history.push("/cookieJars"))}
                                className="btn btn-info">Crumble This Cookie</a>


                                </h5>

                    </div>
                </div>
            )
        }
        </section>

        </React.Fragment>
)
}}