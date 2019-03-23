import React, { Component } from "react"
import Dropzone from 'react-dropzone'
import request from 'superagent'
import './Journal.css'



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

      handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
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
        location: this.state.location,
        id: this.state.id,
        description: this.state.description,
        rating: this.state.rating,
        uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl,

    }

    this.props.editJournal(newJournal.id, newJournal)
    .then(()=>{
        this.props.history.push(`/journals/${this.props.match.params.journalId}`)
    })

}

handleButtonClick = () => {
    document.location.href = 'http://localhost:3000/journals'
}

// in this form be sure to add existing STATE INFO in PLACEHOLDER. >
//Make sure to match ids!!

render() {
    return (
        <React.Fragment>


            <Dropzone className="photo"
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Click HERE to change your profile pic for this event</p>

            </Dropzone>



            <form className="journalForm">
                <div className="form-group">
                    <label htmlFor="journalName">trip type</label>
                    <input type="text"
                        onChange={this.handleFieldChange}
                        id="journalName"
                        placeholder={this.state.journalName} />
                </div>
                <div className="form-group">
                    <label htmlFor="ddates">updated departure </label>
                    <input type="date"
                        onChange={this.handleFieldChange}
                        id="ddates"
                        placeholder="select new departure date"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rdates">updated return</label>
                    <input type="date"
                        onChange={this.handleFieldChange}
                        id="rdates"
                        placeholder="select new return date"/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">updated location </label>
                    <input type="text"
                         onChange={this.handleFieldChange}
                         id="location"
                         placeholder={this.state.location}/>

                <div className="form-group">
                        <label htmlFor="description">new description </label>
                        <input type="text"
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