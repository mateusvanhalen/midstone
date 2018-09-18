import React, { Component } from "react"
import "../login/Login.css"
import Dropzone from 'react-dropzone';
import request from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
// import { Modal } from 'reactstrap';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/mateusvanhalen/upload';
const CLOUDINARY_UPLOAD_PRESET = 'Uxpvft9i';
export default class JournalForm extends Component {

    // Set initial state

    state = {
        journalName: "",
        ddates: "",
        rdates: "",
        location: "",
        rating: "",
        description: "",
        userId: "",
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

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    //setting default input conditions - throwing alert.   MIND THE BANG!
    constructNewJournal = evt => {
        evt.preventDefault()
        if (this.state.dates === "" || this.state.location === "" || this.state.description === "") {
            window.alert("Please input all fields")
        }

        else {
            const journal = {
                pic: this.state.pic,
                journalName: this.state.journalName,
                ddates: this.state.ddates,
                rdates: this.state.rdates,
                location: this.state.location,
                rating: this.state.rating,
                description: this.state.description,
                userId: JSON.parse(localStorage.getItem("credentials")).id,
                uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl
            }

            // Create the journal entry and redirect user to journal list
            this.props.addJournal(journal).then(() => this.props.history.push("/journals"))
        }
    }
    //this takes you back after you click to journalSubmit
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/journals'
    }

    render() {
        return (
            <React.Fragment>
                <form className="journalForm">
                    {
                        <Dropzone
                            multiple={false} accept="image/*"
                            onDrop={this.onImageDrop.bind(this)}>
                            <p>Drop an image or click to select a file to upload.</p>
                        </Dropzone>
                    }
                    <div>
                        <div className="FileUpload">
                        <br/>
                    </div>
                        <div>
                            {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                <div>
                                    <p>{this.state.uploadedFile.name}</p>
                                    <img src={this.state.uploadedFileCloudinaryUrl} />
                                </div>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="journalName">trip type</label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="journalName"
                            placeholder="journal" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ddates">departure </label>
                        <input type="date" required
                            onChange={this.handleFieldChange}
                            id="ddates"
                            placeholder="Select departure date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rdates">return </label>
                        <input type="date" required
                            onChange={this.handleFieldChange}
                            id="rdates"
                            placeholder="Select return date" />
                    </div>
                    {/* <div className="static-modal">
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>One fine body...</Modal.Body>

                            <Modal.Footer>
                                <Button>Close</Button>
                                <Button bsStyle="primary">Save changes</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>; */}

                    <div className="form-group">
                        <label htmlFor="location">location</label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="location"
                            placeholder="Add location" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">description </label>
                        <input type="text" required
                            onChange={this.handleFieldChange}
                            id="description" />
                    </div>
                    <button type="submit" onClick={this.constructNewJournal}
                        className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}