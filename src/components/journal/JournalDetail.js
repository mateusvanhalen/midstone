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
                        <h2 className="card-title">

                        </h2>
                        <h3 className="card-title">{journals.journalName}</h3>

                        <h4>{journals.location} </h4>

                        <h5>  {journals.description} </h5>

                        <p>
                            <a
                                onClick={() => this.props.deleteJournal(journals.id)
                                    .then(() => this.props.history.push("/journals"))}
                                className="btn btn-info">Delete</a>

                            <a

                                className="btn btn-info"
                                onClick={() => this.props.history.push(`/journals/edit/${journals.id}`)}
                                className="btn btn-warning">Edit</a></p>


                        <Link className="nav-link"
                            to="/journals">Back To Journals</Link>


                    </div>
                </div>
            </section>
        )
    }
}