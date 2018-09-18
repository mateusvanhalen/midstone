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
                            <h5 className="card-title"></h5>
                            <h4 className="card-tile">{maybes.maybeName}
                                </h4>
                            {"Where:"}<br/><br/>
                                {maybes.location}
                                {/* {maybes.description} */}
                                <br/><br/>
                                {"Why:"}
                                <br/><br/>
                                {maybes.why}<br/><br/>

                                    <Link className="btn btn-info" to={`/maybes/${maybes.id}`}>Delete this trip idear</Link>


                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}

export default MaybeList;
