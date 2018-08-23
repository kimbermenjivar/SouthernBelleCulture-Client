'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const clearTMP = () => {
  $('.search-results').children('div').remove()
}
const onSignUp = function (event) {
  console.log('trying to sign up')
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('Change Password ran!')

  const data = getFormFields(event.target) // this === event.target
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  // console.log(data)
}

const showChangePassword = function () {
  $('#change-password-form').removeClass('hidden')
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Sign out ran!')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onAddQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.addQuote(data)
    .then(ui.addQuoteSuccess)
    .catch(ui.addQuoteFailure)
}
const onUpdateQuote = function (event) {
  console.log('onUpdateQuote')
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.updateQuote(data)
    .then(ui.updateQuoteSuccess)
    .catch(ui.updateQuoteFailure)
}

const onDeleteQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target

  api.deleteQuote(data)
    .then(ui.deleteQuoteSuccess)
    .catch(ui.deleteQuoteFailure)
}

const onSearchForQuote = function (event) {
  clearTMP()
  event.preventDefault()
  console.log('Search for Quotes ran!')
  api.searchForQuotes()
    .then(ui.searchForQuoteSuccess)
    .catch(ui.searchForQuoteFailure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#show-change-password').on('click', showChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#add-quote').on('submit', onAddQuote)
  $('#delete-quote').on('submit', onDeleteQuote)
  $('#search-for-quotes').on('submit', onSearchForQuote)
  $('#update-quote-form').on('submit', onUpdateQuote)
}

module.exports = {
  addHandlers
}
