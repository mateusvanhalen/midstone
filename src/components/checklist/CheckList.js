import React, { Component } from 'react'
import '../journal/Journal.css'
import './CheckList.css'
import './check.jpg'

export class CheckList extends Component {




    render() {
        return (<React.Fragment>
            <div className="checkButton">
                <button type="button"
                    className="btn btn-info"
                    onClick={() => {
                        this.props.history.push("/checklists/new")
                    }
                    }>
                    Make a new checklist!
                </button>
            </div>
            <section className="checklists">
                <div className="scrollNote">
                    Scroll down to see all checklists
</div>
                {

                    this.props.checklists.map(checklists =>
                        <div key={checklists.id} className="card">
                        {/* <img className='check.jpg'src={'/check.jpg'}/> */}
                            <div className="checklistbody">
                                <h5 className="card-title"></h5>
                                <div className="checkStuff">
                                    {`Trip Type:`}<h4>{checklists.type}</h4>
                                </div>
                                <br /><br />
                                {`Where was this checklist for?`}
                                <br /><br />
                                <div className="checkStuff">
                                    {checklists.location}
                                </div>
                                <br /><br />
                                {`Ok, but what to bring?`}
                                <br /><br />
                                <div className="checkStuff">
                                    {checklists.item}
                                </div>
                                <br /><br />
                                {`Umm..why?`}
                                <br /><br />
                                <div className="checkStuff">
                                    {checklists.why}
                                </div>




                                <br />
                                <br />
                                <button
                                    onClick={() => this.props.deleteCheck(checklists.id)}
                                    className="nav-link-quit">Delete this checklist</button>
                                    <br/>
                                    <br/>
                                    <br/>
                                <h4 className="card-tile">{checklists.checklName}
                                </h4>
                            </div>
                        </div>
                    )
                }
            </section>

        </React.Fragment>
        )
    }
}

export default CheckList;