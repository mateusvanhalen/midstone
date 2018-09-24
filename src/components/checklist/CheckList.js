import React, { Component } from 'react'
import '../journal/Journal.css'

export class CheckList extends Component{




    render() {
        return (<React.Fragment>
            <div className="checkButton">
                <button type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push("/checklists/new")}
                        }>
                    Make a checklist!
                </button>
            </div>
            <section className="checklists">
            {
                // sort by server call, it is easier
                this.props.checklists.map(checklists =>
                    <div key={checklists.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title"></h5>

                                {`Trip Type:`}<h4>{checklists.type}</h4>
                                <br/><br/>
                                {`Where tho?`}
                                <br/><br/>
                                {checklists.location}
                                <br/><br/>
                                {`Ok, but what to bring?`}
                                <br/><br/>
                                {checklists.item}
                                <br/><br/>
                                {`Umm..why?`}
                                <br/><br/>
                                {checklists.why}
                                <br/>




                                <br/>
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