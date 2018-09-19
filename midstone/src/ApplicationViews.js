import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import Login from './components/login/Login'
import Register from './components/login/Register'
import JournalForm from './components/journal/JournalForm'
import JournalList from './components/journal/JournalList'
import JournalEditForm from './components/journal/JournalEditForm'
import DataManager from './modules/DataManager'
import HomePage from './components/homepage/HomePage'
import JournalDetail from './components/journal/JournalDetail'
import MaybeForm from './components/maybe/MaybeForm'
import MaybeDetail from './components/maybe/MaybeDetail'
import MaybeEditForm from './components/maybe/MaybeEditForm'
import MaybeList from './components/maybe/MaybeList'
import CheckForm from './components/checklist/CheckForm'
import CheckList from './components/checklist/CheckList'
import CookieJarForm from './components/cookiejar/CookieJarFrom'
import CookieJarList from './components/cookiejar/CookieJarList'
// import CheckDetail from './components/checkdetail/CheckDetail'
// import CheckEditForm from './components/checkeditform/CheckEditForm'


export default class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    journals: [],
    maybes: [],
    checklists: [],
    cookieJars: [],
    activeUser: JSON.parse(localStorage.getItem("credentials")),
    isLoaded: false,
    user: [],

  }

  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))
  deleteUser = id => DataManager.delete("users", id)
    .then(() => DataManager.getAll("users"))
    .then(user => this.setState({
      user: user
    }))

  editUser = (id, users) => DataManager.edit("users", id, users)
    .then(() => DataManager.getAll("users"))
    .then(user => this.setState({
      user: user
    }))

  addJournal = journal => DataManager.add("journals", journal)
    .then(() => DataManager.getUserData("journals", this.state.activeUser.id))
    .then(journals => this.setState({
      journals: journals
    }))
  // this.state.activeUser.id Will re-render the content after update so you do not have to refresh page. getUserData had no instruction
  deleteJournal = id => DataManager.delete("journals", id)
    .then(() => DataManager.getUserData("journals", this.state.activeUser.id))
    .then(journals => this.setState({
      journals: journals
    }))

  editJournal = (id, journals) => DataManager.edit("journals", id, journals)
    .then(() => DataManager.getUserData("journals", this.state.activeUser.id))
    .then(journals => this.setState({
      journals: journals
    }))

  addMaybe = maybe => DataManager.add("maybes", maybe)
    .then(() => DataManager.getUserData("maybes", this.state.activeUser.id))
    .then(maybes => this.setState({
      maybes: maybes
    }))

  deleteMaybe = id => DataManager.delete("maybes", id)
    .then(() => DataManager.getUserData("maybes", this.state.activeUser.id))
    .then(maybes => this.setState({
      maybes: maybes
    }))
  //rid ?
  editMaybe = (id, maybes) => DataManager.edit("maybes", id, maybes)
    .then(() => DataManager.getUserData("maybes"))
    .then(maybes => this.setState({
      maybes: maybes
    }))

  addCheck = checklist => DataManager.add("checklists", checklist)
    .then(() => DataManager.getUserData("checklists"))
    .then(checklists => this.setState({
      checklists: checklists
    }))

  deleteCheck = id => DataManager.delete("checklists", id)
    .then(() => DataManager.getUserData("checklists", this.state.activeUser.id))
    .then(checklists => this.setState({
      checklists: checklists
    }))
  addCookieJar = cookieJar => DataManager.add("cookieJars", cookieJar)
    .then(() => DataManager.getUserData("cookieJars", this.state.activeUser.id))
    .then(cookieJars => this.setState({
      cookieJars: cookieJars
    }))
  deleteCookieJar = id => DataManager.delete("cookieJars", id)
    .then(() => DataManager.getUserData("cookieJars", this.state.activeUser.id))
    .then(cookieJars => this.setState({
      cookieJars: cookieJars
    }))

  componentDidMount() {
    // This if statment is for logged in users only. ALSO REMEMBER to pass in as many items as you listed to pass in for each DataManger :)

    if (this.isAuthenticated()) {


      const newState = {}
      let activeUser = JSON.parse(localStorage.getItem("credentials"))
      newState.user = activeUser


      DataManager.getAll("users")
        .then(allUsers => {
          newState.users = allUsers
        })
        .then(() => {
          DataManager.getUserData("maybes", activeUser.id)
            .then(allMaybes => {
              newState.maybes = allMaybes
            })
            .then(() => {
              DataManager.getUserData("journals", activeUser.id)
                .then(allJournals => {
                  newState.journals = allJournals
                })
                .then(() => {
                  DataManager.getAll("checklists", activeUser.id)
                    .then(allChecklists => {
                      newState.checklists = allChecklists
                    })
                    .then(() => {
                      DataManager.getUserData("cookieJars", activeUser.id)
                        .then(allCookieJars => {
                          newState.cookieJars = allCookieJars
                        })

                        .then(() => {
                          this.setState(newState)
                        })
                    })
                })
            })
        })
    }
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
        < Route exact path="/journals/:journalId(\d+)" render={(props) => {
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
        }} />
        < Route exact path="/maybes" render={(props) => {
          if (this.isAuthenticated()) {
            return <MaybeList {...props}
              deleteMaybe={this.deleteMaybe}
              maybes={this.state.maybes} />
          } else {
            return <Redirect to="/" />
          }
        }
        } />
        < Route exact path="/maybes/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <MaybeForm {...props}
              addMaybe={this.addMaybe} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/maybes/:maybeId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <MaybeDetail {...props} deleteMaybe={this.deleteMaybe} maybes={this.state.maybes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/maybes/edit/:maybeId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <MaybeEditForm  {...props} editMaybe={this.editMaybe} maybes={this.state.maybes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/checklists" render={(props) => {
          if (this.isAuthenticated()) {
            return <CheckList {...props}
              deleteCheck={this.deleteCheck}
              checklists={this.state.checklists} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/checklists/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <CheckForm {...props}
              addCheck={this.addCheck} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/cookieJars/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <CookieJarForm {...props}
              addCookieJars={this.addCookieJars} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/cookieJars" render={(props) => {
          if (this.isAuthenticated()) {
            return <CookieJarList {...props}
              deleteCookieJars={this.deleteCookieJars}
              cookieJars={this.state.cookieJars} />
          } else {
            return <Redirect to="/" />
          }
        }
        } />








        {/* < Route exact path="/checklists/:checkId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CheckDetail {...props} deleteCheck={this.deleteCheck} checks={this.state.checks} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/checklists/edit/:journalId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CheckEditForm  {...props} editCheck={this.editCheck} checks={this.state.checks} />
          } else {
            return <Redirect to="/" />
          }
        }} /> */}
      </React.Fragment>
    )

  }
}