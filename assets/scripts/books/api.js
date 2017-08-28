'use strict'

const app = require('../app.js')

const getPatients = function () {
  return $.ajax({
    url: app.host + '/patients', // "http://book-json.herokuapp.com/books"
    method: 'GET'
  })
}

const getAppointments = function () {
  return $.ajax({
    url: app.host + '/appointments', // "http://book-json.herokuapp.com/books"
    method: 'GET'
  })
}

const changeDoctor = function (firstName, lastName) {
  console.log(firstName + ' is the data')
  return $.ajax({
    url: app.host + '/doctors/' + 2,
    method: 'PATCH',
    data: {
      'doctor': {
        'given_name': firstName,
        'family_name': lastName
      }
    }
  })
}

const deleteAppointment = function () {
  return $.ajax({
    url: app.host + '/appointments/' + 10,
    method: 'DELETE'
  })
}

module.exports = {
  getPatients,
  getAppointments,
  changeDoctor,
  deleteAppointment
}
