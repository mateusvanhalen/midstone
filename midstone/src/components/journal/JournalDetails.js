import React, { Component } from "react"
import { Link } from "react-router-dom"





export default class JournalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const journal = this.props.journal.find(a => a.id === parseInt(this.props.match.params.journalId, 0)) || {}

        return (
            <section className="journal">
                <div key={journal.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={journal_pic} alt="" className="icon--journal" /> */}
                        </h4>
                        <h6 className="card-title">{journal.journalName}</h6>
                        <h6>{journal.location},
                        {journal.rating},
                        {journal.description}
                        </h6>
                        <h5>
                            <a
                                onClick={() => this.props.deletejournal(journal.id)
                                    .then(() => this.props.history.push("/journals"))}
                                className="btn btn-success">Delete</a>

                            <a

                                className="btn btn-success"
                                onClick={() => this.props.history.push(`/journals/edit/${journal.id}`)}
                                className="btn btn-success">Edit</a></h5>


                        <Link className="nav-link"
                            to="/journals">Back To Journals</Link>


                    </div>
                </div>
            </section>
        )
    }
}