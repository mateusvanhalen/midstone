import React, { Component } from "react"
// import Dropzone from 'react-dropzone'
// import request from 'superagent'



const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mateusvanhalen/upload';
const CLOUDINARY_UPLOAD_PRESET = 'Uxpvft9i';

export default class JournalEditForm extends Component {

    state = {
        uploadedFileCloudinaryUrl: "",
    }

    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
      }

// update state upon edits to fields
handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

componentDidMount() {
    // console.log(this.state)
    const event = this.props.journals.find(a => a.id === parseInt(this.props.match.params.journalId, 0))
    this.setState(event);
}
constructNewJournal = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    let newJournal = {
        journalName: this.state.journalName,
        journalId: this.props.journals.find(e => e.name === this.state.event).id,
        ddates: this.state.ddates,
        rdates:this.state.rdates,
        id: this.state.id,
        description: this.state.description,
        rating: this.state.rating,

    }

    this.props.editJournal(newJournal.id, newJournal)
    .then(()=>{
        this.props.history.push(`/journals/${this.props.match.params.journalId}`)
    })
}

// in this form be sure to add existing STATE INFO in PLACEHOLDER. >
//Make sure to match ids!!

render() {
    return (
        <React.Fragment>

        {/* {
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
          } */}


            <form className="journalForm">
                <div className="form-group">
                    <label htmlFor="journalName">trip type</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="journalName"
                        placeholder={this.state.journalName} />
                </div>
                <div className="form-group">
                    <label htmlFor="ddates">updated departure </label>
                    <input type="date" required="true"
                        onChange={this.handleFieldChange}
                        id="ddate"
                        placeholder="select new departure date"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rdates">updated return</label>
                    <input type="date" required="true"
                        onChange={this.handleFieldChange}
                        id="rdate"
                        placeholder="select new return date"/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">updated location </label>
                    <input type="text" required="true"
                         onChange={this.handleFieldChange}
                         id="location"
                         placeholder={this.state.location}/>
                    <div
                        className="form-group">
                        <label htmlFor="rating">Rating </label>
                                <div>
                                    <label>
                                        <input type="radio" name="stars" value="1" />
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="2" />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="3" />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="4" />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="stars" value="5" />
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                        <span className="icon">★</span>
                                    </label>
                                </div>

                            {this.handleFieldChange}

                </div>
                <div className="form-group">
                        <label htmlFor="description">new description </label>
                        <input type="text" required="true"
                            onChange={this.handleFieldChange}
                            id="description"/>
                    </div>
                <button type="submit" onClick={this.constructNewJournal}
                className="btn btn-primary">Submit</button>
            </div>
            </form>
        </React.Fragment>
    )
}
}