import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class CookieJarList extends Component{


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
            {`weeks to go:`}  {this(cookieJars.weeksTil)}
            {`until `} {this.formatDate(cookieJars.ddates)}
                            <br/>
            {`save this per week:`}  {this(cookieJars.total)} <br/>
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