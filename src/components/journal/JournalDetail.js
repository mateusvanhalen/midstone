import React, { Component } from "react"
import { Link } from "react-router-dom"
import './Journal.css'





export default class JournalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const journals = this.props.journals.find(a => a.id === parseInt(this.props.match.params.journalId, 0)) || {}

        return (
            <section className="journal">
                <div key={journals.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">

                        </h4>
                        <h6 className="card-title">{journals.journalName}</h6>

                        <h6>{journals.location} </h6>

                        <h6>  {journals.description} </h6>

                        <h5>
                            <a
                                onClick={() => this.props.deleteJournal(journals.id)
                                    .then(() => this.props.history.push("/journals"))}
                                className="btn btn-success">Delete</a>

                            <a

                                className="btn btn-success"
                                onClick={() => this.props.history.push(`/journals/edit/${journals.id}`)}
                                className="btn btn-success">Edit</a></h5>


                        <Link className="nav-link"
                            to="/journals">Back To Journals</Link>


                    </div>
                </div>
            </section>
        )
    }
}