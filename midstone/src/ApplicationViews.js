import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login'
import Register from './components/login/Register'
import JournalForm from './components/journal/JournalForm'
import JournalList from './components/journal/JournalList'
import DataManager from './modules/DataManager'
import HomePage from './components/homepage/HomePage'


export default class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    journals: [],
    wishlists: [],
    checklists: [],
    isLoaded: false
  }

  addJournal = journal => DataManager.add("journals", journal)
    .then(() => DataManager.getAllAscend("journals"))
    .then(journals => this.setState({
      journals: journals
    }))

  deleteJournal = id => DataManager.delete("journals", id)
    .then(() => DataManager.getAllAscend("journals"))
    .then(journals => this.setState({
      journals: journals
    }))

  editJournal = (id, journals) => DataManager.edit("journals", id, journals)
    .then(() => DataManager.getAllAscend("journals"))
    .then(journals => this.setState({
      journals: journals
    }))

  componentDidMount() {

    const newState = {}

      .then(() => {
        DataManager.getAllAscend("journals")
          .then(allJournals => {
            newState.journals = allJournals
          })
      })
    }

    render() {
      return (
        <React.Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" render={(props) => {
            return <Register {...props}
              addUser={this.addUser}
              users={this.state.users} />
          }} />
          <Route exact path="/journals/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <JournalForm {...props}
              addTask={this.addJournal} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/journals" render={(props) => {
          if (this.isAuthenticated()) {
            return <JournalList {...props}
              deleteJournal={this.deleteJournal}
              editJournal={this.editJournal}
              journals={this.state.journals} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        </React.Fragment>
        )

      }
    }