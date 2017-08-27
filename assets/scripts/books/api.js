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

const changeDoctor = function (data) {
  console.log(data + ' is the data')
  return $.ajax({
    url: app.host + '/doctors/' + 1,
    method: 'PATCH',
    data: {
      'doctor': {
        'given_name': data
      }
    }
  })
}

// let deletePatients = function () {
//   return $.ajax({
//     url: app.host + '/patients', // "http://book-json.herokuapp.com/books"
//     method: 'DELETE',
//     data
//   });
// };

module.exports = {
  getPatients,
  getAppointments,
  changeDoctor
  // deletePatient,
}
