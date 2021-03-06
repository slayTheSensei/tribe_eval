'use strict'

// const showPatientsTemplate = require('../templates/patient-listing.handlebars')
const showPatientsTemplate = require('../templates/patient-listing.handlebars')
const showAppointmentsTemplate = require('../templates/appointment-listing.handlebars')
const showUsersTemplate = require('../templates/user-listing.handlebars')
// const appEvents = require('./events.js')

const getPatientsSuccess = (data) => {
  console.log(data)
  const showPatientsHtml = showPatientsTemplate({ users: data.user })
  $('.p-content').append(showPatientsHtml)
}

const getAppointmentsSuccess = (data) => {
  console.log(data)
  const showAppointmentsHtml = showAppointmentsTemplate({ user: data.user.appointments, doctor: data.user.doctors })
  $('#app-content').append(showAppointmentsHtml)
}

const getUserSuccess = (data) => {
  console.log(data)
  const showUsersHtml = showUsersTemplate({ users: data.users })
  $('#user-content').append(showUsersHtml)
}

const changeDoctorSuccess = () => {
  console.log('Beast Mode')
  $('.changed').html('Updated')
}

const deleteAppointmentSuccess = (data) => {
  if (data) {
    console.log(data)
  } else {
    console.log('Success')
  }
}

const createAppointmentSuccess = () => {
  console.log('Beast Mode')
  $('.changed').html('Updated')
}

const clearAppointments = () => {
  $('.content').empty()
}

const onDeleteDiagnosis = () => {
  $(this).parent().hide()
}

const failure = (error) => {
  console.error('You suck guy')
  console.error(error)
}

module.exports = {
  getPatientsSuccess,
  failure,
  onDeleteDiagnosis,
  getAppointmentsSuccess,
  changeDoctorSuccess,
  deleteAppointmentSuccess,
  clearAppointments,
  createAppointmentSuccess,
  getUserSuccess
}
