'use strict'

const app = require('../app.js')

const getPatients = function () {
  return $.ajax({
    url: app.host + '/patients',
    method: 'GET'
  })
}

const getAppointments = function () {
  console.log('Hello ' + app.user.given_name) // use this to personaly greet a user
  return $.ajax({
    url: app.host + '/users/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getUsers = function () {
  return $.ajax({
    url: app.host + '/users',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changeDoctor = function (docId, appId) {
  return $.ajax({
    url: app.host + '/appointments/' + appId,
    method: 'PATCH',
    data: {
      'appointment': {
        'doctor_id': docId
      }
    }
  })
}

const changeDiagnosis = function (diagnosis, id) {
  console.log(id + ' is the data')
  return $.ajax({
    url: app.host + '/users/' + id,
    method: 'PATCH',
    data: {
      'patient': {
        'diagnosis': diagnosis
      }
    }
  })
}

const deleteAppointment = function (id) {
  return $.ajax({
    url: app.host + '/appointments/' + id,
    method: 'DELETE'
  })
}

const createAppointment = function (type, date, doctor, patient) {
  console.log(type + ' ' + date + ' ' + doctor + ' ' + patient)
  return $.ajax({
    url: app.host + '/appointments/',
    method: 'POST',
    data: {
      'appointment': {
        'app-date': date,
        'app_type': type,
        'doctor_id': doctor,
        'user_id': app.user.id
      }
    }
  })
}

module.exports = {
  getPatients,
  getAppointments,
  changeDoctor,
  deleteAppointment,
  createAppointment,
  changeDiagnosis,
  getUsers
}
