import React, { Component } from "react"
import { Link } from "react-router-dom"





export default class MaybeDetail extends Component {
    render() {
        const maybes = this.props.maybes.find(a => a.id === parseInt(this.props.match.params.maybeId, 0)) || {}

//need to get the object down to this section
        return (

            <section className="maybes">
                <div key={maybes.id}
                className="maybes">

                    <div className="card-body">
                    {/* <a target="#/2.xhtml" href={maybes.video} className="btn btn-info"
                    src={maybes.video} onclick="audio.play()" */}

                        {/* Loads and plays using EMBEDED url link */}
                        <iframe width="420" height="315"
                            src={maybes.video}>
                        </iframe>
                    <br/>
                    {/* >click to {maybes.description}</a>
                     */}
                    <br/>
                    {/* <iframe width="420" height="315" src={maybes.video}></iframe> */}


                    {"Are you really sure you want to can your "}
                {maybes.maybeName}
                {" to "}{maybes.location}{"?! Remember you wanted to "}{maybes.why}{" and "}{maybes.description} <br/><br/>
                {" Have a listen before you delete? "}
                </div>

                            <h2><a
                                onClick={() => this.props.deleteMaybe(maybes.id)
                                    .then(() => this.props.history.push("/maybes"))}
                                className="btn btn-info">Confirm Delete trip</a></h2>



                        <h2><Link className="btn btn-info"
                            to="/maybes">Keep and return to List</Link></h2>


                    </div>


            </section>

        )
    }
}