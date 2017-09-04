'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetPatients = (event) => {
  event.preventDefault()
  api.getPatients()
    .then(ui.getPatientsSuccess)
    .catch(ui.failure)
}

const onGetAppointments = (event, data) => {
  console.log(data)
  api.getAppointments()
    .then(ui.getAppointmentsSuccess)
    .catch(ui.failure)
}

const onGetUsers = (event) => {
  api.getUsers()
    .then(ui.getUserSuccess)
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
  console.log(event.target.name)
  let id = (event.target.name)
  api.deleteAppointment(id)
    .then(ui.deleteAppointmentSuccess)
    .then(refresh)
    .catch(ui.failure)
}

const onDeleteUser = (event) => {
  event.preventDefault()
  console.log('User data is ' + event.target.name)
  api.deleteUser()
    .then(ui.deleteAppointmentSuccess)
    .then(refresh)
    .catch(ui.failure)
}

const onClearAppointments = (event) => {
  ui.clearAppointments()
}

const onCreateAppointment = (event) => {
  event.preventDefault()
  let type = $('#app-type').val()
  let date = $('#app-date').val()
  let doctor = $('#app-doctor').val()
  let patient = $('#app-patient').val()
  console.log(type + ' ' + patient)
  api.createAppointment(type, date, doctor, patient)
    .then(ui.createAppointmentSuccess)
    .catch(ui.failure)
}

// MODAL CLICK HANDLERS
const toggleDoctorModal = function () {
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
  $('#get-users-button').on('click', onGetUsers)
  $('body').on('click', '#delete-user', onDeleteUser)
}
//
// $(document).ready(onGetUsers)

module.exports = {
  addHandlers,
  toggleDoctorModal,
  refresh
}
