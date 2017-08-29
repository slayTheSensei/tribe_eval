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
  // event.preventDefault()
  api.getAppointments()
    .then(ui.getAppointmentsSuccess)
    .catch(ui.failure)
}

const onChangeDoctor = (event) => {
  event.preventDefault()
  let firstName = $('#first-name').val()
  let lastName = $('#last-name').val()
  let id = (event.target.name)
  console.log(firstName + ' ' + lastName)
  api.changeDoctor(firstName, lastName, id)
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
    .then(refresh)
    .catch(ui.failure)
}

const onClearAppointments = (event) => {
  // event.preventDefault()
  ui.clearAppointments()
}

const onCreateAppointment = (event) => {
  event.preventDefault()
  let type = $('#app-type').val()
  let date = $('#app-date').val()
  let doctor = $('#app-doctor').val()
  let patient = $('#app-patient').val()
  // let data = getFormFields(event.target) || TODO come back and refractor
  console.log(type + ' ' + patient)
  api.createAppointment(type, date, doctor, patient)
    .then(ui.createAppointmentSuccess)
    .catch(ui.failure)
}

// MODAL CLICK HANDLERS
const toggleDoctorModal = function () {
  // event.preventDefault()
  $('#change-doctor').toggleClass('is-active')
}
const toggleDiagnosisModal = function () {
  $('#update-diagnosis').toggleClass('is-active')
}

const toggleCreateModal = function () {
  $('#create-modal').toggleClass('is-active')
}

const refresh = function () {
  onClearAppointments()
  onGetAppointments()
}

const onUpdateDiagnosis = function (event) {
  event.preventDefault()
  let diagnosis = $('#diagnosis').val()
  let id = (event.target.name)
  // let data = getFormFields(event.target)
  api.changeDiagnosis(diagnosis, id)
    .then(ui.changeDoctorSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getPatientsButton').on('click', onGetPatients)
  $('#getAppointmentsButton').on('click', onGetAppointments)
  $('body').on('click', '#change-doc', onChangeDoctor)
  $('#create-app').on('submit', onCreateAppointment)
  $('body').on('click', '#delete-appointment', onDeleteAppointment)
  $('#clear-appointments').on('click', onClearAppointments)
  $('body').on('click', '.modal-doctor-toggle', toggleDoctorModal)
  $('body').on('click', '.refresh', refresh)
  $('body').on('click', '#change-patient-diagnosis', onUpdateDiagnosis)
  // Diagnosis Modal
  $('body').on('click', '.modal-diagnosis-toggle', toggleDiagnosisModal)
  // Create Modal
  $('.create-modal-toggle').on('click', toggleCreateModal)
  // $('#close-modal').on('click', toggleCreateModal)
}

$(document).ready(onGetAppointments)

module.exports = {
  addHandlers,
  toggleDoctorModal,
  refresh
}
