'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addQuote = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/southerncultures',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteQuote = function (data) {
  console.log(data)

  return $.ajax({
    url: config.apiUrl + '/southerncultures/' + data.southernculture.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const searchForQuotes = function () {
  return $.ajax({
    url: config.apiUrl + '/southerncultures/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateQuote = function (data) {
  return $.ajax({
    url: config.apiUrl + '/southerncultures/' + data.southernculture.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addQuote,
  deleteQuote,
  searchForQuotes,
  updateQuote
}
