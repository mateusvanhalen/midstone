import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login'
import Register from './components/login/Register'
import JournalForm from './components/journal/JournalForm'
import JournalList from './components/journal/JournalList'
// import JournalEditForm from './components/journal/JournalEditForm'
import DataManager from './modules/DataManager'
import HomePage from './components/homepage/HomePage'
// import JournalDetail from './components/journal/JournalDetail'


export default class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    journals: [],
    wishlists: [],
    checklists: [],
    isLoaded: false
  }

  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))
    deleteUser = id => DataManager.delete("user", id)
    .then(() => DataManager.getAll("user"))
    .then(user => this.setState({
      user: user
    }))

  editUser = (id, user) => DataManager.edit("user", id, user)
    .then(() => DataManager.getAll("user"))
    .then(user => this.setState({
      user: user
    }))

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

    DataManager.getAll("users")
    .then(allUsers => {
      newState.users = allUsers
    })

        DataManager.getAllAscend("journals")
          .then(allJournals => {
            newState.journals = allJournals
          })
          .then(() => {
            this.setState(newState)
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
          < Route exact path="/journals" render={(props) => {
          if (this.isAuthenticated()) {
            return <JournalList {...props}
              deleteJournal={this.deleteJournal}
              journals={this.state.journals} />
          } else {
            return <Redirect to="/" />
          }
        }
        } />
        < Route exact path="/journals/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <JournalForm {...props}
              addJournal={this.addJournal} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        {/* < Route exact path="/journals/:journalId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <JournalDetail {...props} deleteJournal={this.deleteJournal} journals={this.state.journals} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/journals/edit/:journalId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <JournalEditForm  {...props} editJournal={this.editJournal} journals={this.state.journals} />
          } else {
            return <Redirect to="/" />
          }
        }} /> */}
        </React.Fragment>
        )

      }
    }