'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const showPatientsTemplate = require('../templates/patient-listing.handlebars')

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

const onClearPatients = (event) => {
  event.preventDefault()
  ui.clearPatients()
}

const addHandlers = () => {
  $('#getPatientsButton').on('click', onGetPatients)
  $('#getAppointmentsButton').on('click', onGetAppointments)
  // $('#clearPatientsButton').on('click', onClearPatients)
  // $('#deleteDiagnosis').on('click', onDeleteDiagnosis)
  // $('#createBook').on('click', onCreateBook);
}

module.exports = {
  addHandlers
}
