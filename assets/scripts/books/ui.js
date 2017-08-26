'use strict'

// const showPatientsTemplate = require('../templates/patient-listing.handlebars')
const showPatientsTemplate = require('../templates/patient-listing.handlebars')
const showAppointmentsTemplate = require('../templates/appointment-listing.handlebars')

const getPatientsSuccess = (data) => {
  console.log(data)
  const showPatientsHtml = showPatientsTemplate({ patients: data.patients })
  $('.p-content').append(showPatientsHtml)
}

const getAppointmentsSuccess = (data) => {
  console.log(data)
  const showAppointmentsHtml = showAppointmentsTemplate({ appointments: data.appointments })
  $('#app-content').append(showAppointmentsHtml)
}

const clearPatients = () => {
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
  clearPatients,
  failure,
  onDeleteDiagnosis,
  getAppointmentsSuccess
}
