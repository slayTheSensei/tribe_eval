'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// const showPatientsTemplate = require('../templates/patient-listing.handlebars')
// const showAppointmentsTemplate = require('../templates/appointment-listing.handlebars')
const getFormFields = require('../../../lib/get-form-fields')

const onGetPatients = (event) => {
  event.preventDefault()
  api.getPatients()
    .then(ui.getPatientsSuccess)
    .catch(ui.failure)
}

const onGetAppointments = (event) => {
  event.preventDefault()
  api.getAppointments()
    .then(ui.getAppointmentsSuccess)
    .catch(ui.failure)
}

const onChangeDoctor = (event) => {
  event.preventDefault()
  let firstName = $('#first-name').val()
  let lastName = $('#last-name').val()
  // let data = getFormFields(event.target)
  console.log(firstName + ' ' + lastName)
  api.changeDoctor(firstName, lastName)
    .then(ui.changeDoctorSuccess)
    .catch(ui.failure)
}

const onDeleteAppointment = (event) => {
  event.preventDefault()
  // $(this).attr('name')
  console.log(event.target.name)
  let id = (event.target.name)
  api.deleteAppointment(id)
    .then(ui.deleteAppointmentSuccess)
    .catch(ui.failure)
}

const onClearAppointments = (event) => {
  event.preventDefault()
  ui.clearAppointments()
}

const addHandlers = () => {
  $('#getPatientsButton').on('click', onGetPatients)
  $('#getAppointmentsButton').on('click', onGetAppointments)
  $('#change-doctor').on('submit', onChangeDoctor)
  // $('#delete-appointment').on('click', onDeleteAppointment)
  $('body').on('click', '#delete-appointment', onDeleteAppointment)
  $('#clear-appointments').on('click', onClearAppointments)
}

module.exports = {
  addHandlers
}
