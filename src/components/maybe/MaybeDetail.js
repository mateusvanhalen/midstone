import React, { Component } from "react"
import { Link } from "react-router-dom"





export default class MaybeDetail extends Component {
    render() {
        const maybes = this.props.maybes.find(a => a.id === parseInt(this.props.match.params.maybeId, 0)) || {}
        console.log(maybes)
        let fields = maybes.video.split(`=`)
        let youtube = fields[1]
//need to get the object down to this section
        return (

            <section className="maybes">
                <div key={maybes.id}
                className="maybes">

                    <div className="card-body">



                    {/* <a target="#/2.xhtml" href={maybes.video} className="btn btn-info"
                    src={maybes.video} onclick="audio.play()" */}

                        {/* Loads and plays using EMBEDED url link */}
                        <iframe width="420" height="315" src={`https://www.youtube.com/embed/${youtube}?autoplay=1`}>


                        {/* let fields = {maybes.video}.split(=)
                        let youtube = fields[1]

                        "https://www.yourtube.com/embed{[1]}?autoplay=1" */}

                        </iframe>
                    <br/>
                    {/* >click to {maybes.description}</a>
                     */}
                    <br/>
                    {/* <iframe width="420" height="315" src={maybes.video}></iframe> */}

                     <h2>
                    {"Are you really sure you want to can your "}
                {maybes.maybeName}
                {" to "}{maybes.location}{"?! Remember you wanted to "}{maybes.why}{" and "}{maybes.description} <br/><br/>
                {" Have a listen before you delete? "}</h2>
                </div>

                            <h3><a
                                onClick={() => this.props.deleteMaybe(maybes.id)
                                    .then(() => this.props.history.push("/maybes"))}
                                className="btn btn-info">Confirm Delete trip</a></h3>



                        <h4><Link className="btn btn-info"
                            to="/maybes">Keep and return to List</Link></h4>


                    </div>


            </section>

        )
    }
}