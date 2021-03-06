'use strict'

const user = require('../books/events.js')
const app = require('../app.js')

const success = (data) => {
  if (data) {
    console.log(data)
  } else {
    console.log('Success')
  }
}

const signUpSuccess = (data) => {
  if (data) {
    console.log('new page')
  } else {
    console.log('Success')
  }
  $('#sign-up-view').hide()
  $('#sign-in-view').show()
}

const failure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app.user)
  console.log(data)
  $('#sign-in-view').hide()
  $('#profile-view').show()
  $('#greeting').html('Hello, ' + app.user.given_name)

  // location.href = 'http://localhost:7165/profile.html'
}

const signOutSuccess = () => {
  console.log('User signed out successfully')
  app.user = null
  location.href = 'http://localhost:7165/index.html'
}

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess
}
