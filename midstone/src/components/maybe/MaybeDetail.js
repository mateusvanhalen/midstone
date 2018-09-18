import React, { Component } from "react"
import { Link } from "react-router-dom"





export default class MaybeDetail extends Component {
    render() {
        const maybe = this.props.maybes.find(a => a.id === parseInt(this.props.match.params.maybeId, 0)) || {}

//need to get the object down to this section
        return (

            <section className="maybes">
                <div key={maybe.id}
                className="maybes">

                    <div className="card-body">
                    <h4 className="card-title">
                    {"Are you really sure you want to can your "}
                {maybe.maybeName}
                {" to "}{maybe.location}{"?! Remember you wanted to "}{maybe.why} {" Check this out before you delete "}
                {maybe.video}

            // get this to play on auto}


                </h4>

                            <h2><a
                                onClick={() => this.props.deleteMaybe(maybe.id)
                                    .then(() => this.props.history.push("/maybes"))}
                                className="btn btn-warning">Confirm Delete trip</a></h2>



                        <h2><Link className="btn-info"
                            to="/maybes">Keep and return to List</Link></h2>


                    </div>
                </div>


            </section>

        )
    }
}