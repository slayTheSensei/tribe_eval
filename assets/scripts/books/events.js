'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const showPatientsTemplate = require('../templates/patient-listing.handlebars')
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
  let data = $('#docField').val()
  // let data = getFormFields(event.target)
  console.log(data)
  api.changeDoctor(data)
    .then(ui.changeDoctorSuccess)
    .catch(ui.failure)
}

const onDeleteAppointment = (event) => {
  event.preventDefault()
  api.deleteAppointment()
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
  $('#delete-appointment').on('click', onDeleteAppointment)
  $('#clear-appointments').on('click', onClearAppointments)
}

module.exports = {
  addHandlers
}
