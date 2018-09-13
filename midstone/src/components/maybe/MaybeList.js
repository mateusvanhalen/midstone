import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import './Journal.css'

class MaybeList extends Component {

    render() {
        return (<React.Fragment>
            <div className="maybeButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/maybes/new")}
                        }>
                    Where to?
                </button>
            </div>
            <section className="maybes">
            {
                //sort by date?
                // it is easier to sort by server call

                this.props.maybes.map(maybes =>
                    <div key={maybes.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {/* {this.formatDate(maybes.rdate)}
                                {this.formatDate(maybes.ddate)} */}
                                {maybes.location}
                                <br/>
                                {maybes.why}

                                    <Link className="nav-link" to={`/maybes/${maybes.id}`}>Details</Link>
                                    </h5>
                                <button
                                    onClick={() => this.props.deleteMaybe(maybes.id)}
                                    className="nav-link-quit">Delete maybe entry</button>
                            <h4 className="card-tile">{maybes.maybeName}
                                </h4>
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}

export default MaybeList;
