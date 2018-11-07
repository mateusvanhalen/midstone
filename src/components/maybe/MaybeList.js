import React, { Component } from 'react'
import { Link } from "react-router-dom"

class MaybeList extends Component {

    render() {
        return (<React.Fragment>
            <div className="maybeButton">
                <button type="image" src="sunshine.jpg"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push("/maybes/new")
                            }
                        }>
                    Add a "Maybe"
                </button>
                <br/><br/><br/>

            <section className="maybes">
            <br/>
            {
                //sort by date?
                // it is easier to sort by server call

                this.props.maybes.map(maybes =>
                    <div key={maybes.id} className="card">
                        <div className="maybe-body">
                            <h4 className="card-title" display="inline">
                            {"Where:"}<br/><br/>
                                {maybes.location}
                                {/* {maybes.description} */}
                                <br/><br/>
                                {"Why:"}
                                <br/><br/>
                                {maybes.why}<br/><br/>


                                    <Link className="btn btn-info" to={`/maybes/${maybes.id}`}

                                    >Delete this trip idear</Link>


                                    </h4>

                        </div>
                    </div>
                )
            }
            </section>
            </div>
            </React.Fragment>
    )
}}

export default MaybeList;
