import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Maybe.css'

class MaybeList extends Component {

    render() {
        return (<React.Fragment>
            <div className="maybeButton">
            <p>
            Where is your "Maybe one day" trip? Think about it for a moment and add below!
            </p>
            <br/>
                <button
                        className="btn btn-info"
                            onClick={() => {
                            this.props.history.push("/maybes/new")
                            }}>
                    Add a "Maybe"
                </button>
                <br/><br/><br/>
                <p>See your other "Mayebes" below</p>
                <br/><br/><br/>
            <section className="maybes">
            <br/>
            {
                //sort by date?
                // it is easier to sort by server call
                this.props.maybes.map(maybes =>
                    <div key={maybes.id} className="card">
                        <div className="may">
                            <h4 className="card-titlebox" >
                            {"Where to:"}<br/><br/>
                                {maybes.location}
                                {/* {maybes.description} */}
                                <br/><br/>
                            {"What for:  "}

                                {maybes.why}<br/><br/>
                                    <Link className="btn btn-info" to={`/maybes/${maybes.id}`}
                            >Delete this trip idear</Link>
                            </h4>
                        </div>
                    </div>
                )}
            </section>
            </div>
            </React.Fragment>
    )
}}

export default MaybeList;
