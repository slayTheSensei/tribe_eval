'use strict'

const app = require('../app.js')

const getPatients = function () {
  return $.ajax({
    url: app.host + '/patients', // "http://book-json.herokuapp.com/books"
    method: 'GET'
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
  getPatients
  // deletePatient,
}
