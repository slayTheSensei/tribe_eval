'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  console.log(event.target)
  let data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure)
}

const signUpView = function () {
  event.preventDefault()
  $('#landing').hide()
  $('#sign-up-view').show()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-up-view').hide()
  $('#sign-in-view').hide()
  $('#profile-view').hide()
  $('.login-button').on('click', signUpView)
  $('#to-sign-in').on('click', ui.signUpSuccess)
}

module.exports = {
  addHandlers
}
