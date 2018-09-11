import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login'
//import JournalForm from './components/journal/JournalForm'

export default class ApplicationViews extends Component {

isAuthenticated = () => localStorage.getItem("credentials") !== null

state = {
  users: [],
  checklists: [],
  wishlists: [],
  journals: [],
  isLoaded: false
}

}