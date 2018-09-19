import React, { Component } from 'react'
import '../journal/Journal.css'

export class CheckList extends Component{




    render() {
        return (<React.Fragment>
            <div className="checkButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/checklists/new")}
                        }>
                    Your suggestions for others checklists
                </button>
            </div>
            <section className="checklists">
            {
                // sort by server call, it is easier
                this.props.checklists.map(checklists =>
                    <div key={checklists.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">

                                {checklists.type}
                                <br/>
                                {checklists.location}
                                <br/>
                                {checklists.item}
                                <br/>
                                {checklists.why}




                                    </h5>
                                <button
                                    onClick={() => this.props.deleteCheck(checklists.id)}
                                    className="nav-link-quit">Delete this checklist</button>
                            <h4 className="card-tile">{checklists.checklName}
                                </h4>
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}

export default CheckList;