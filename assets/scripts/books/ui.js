'use strict'

// const showPatientsTemplate = require('../templates/patient-listing.handlebars')
const showPatientsTemplate = require('../templates/appointment-listing.handlebars')

const getPatientsSuccess = (data) => {
  console.log(data)
  const showPatientsHtml = showPatientsTemplate({ patients: data.patients })
  $('.content').append(showPatientsHtml)
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
  onDeleteDiagnosis
}
