'use strict'
const store = require('../store')
const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  // console.log('signUpSuccess ran. Data is:', data)
  $('#sign-up').addClass('hidden')
  store.user = data.user
}
const signUpFailure = function (error) {
  $('#message').text('Error on sign' + error)
  $('#message').css('background-color', 'red')
  // console.log('signUpFailure ran. Data is:', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#add-quote').removeClass('hidden')
  $('#delete-quote').removeClass('hidden')
  $('#search-for-quotes').removeClass('hidden')
  $('.auth').addClass('hidden')
  $('#navbar').removeClass('hidden')
  $('#update-quote-form').removeClass('hidden')
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  // console.log('signInSuccessful ran. Data is:', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in' + error)
  $('#message').css('background-color', 'red')
  // console.log('signInFailure ran. Data is:', error)
}
const changePasswordSuccess = function (data) {
  $('#message').text('changed password successfully')
  $('#message').css('background-color', 'green')
  // console.log('password changed successfully')
  $('#change-password-form').addClass('hidden')
}
const changePasswordFailure = function () {
  $('#message').text(`Error on change password Please Try again`)
  $('#message').css('background-color', 'red')
  // console.log('changePasswordFailure ran. Data is:', error)
}
const signOutSuccess = function (data) {
  // console.log('ha')
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.auth').removeClass('hidden')
  $('#add-quote').addClass('hidden')
  $('#delete-quote').addClass('hidden')
  $('#search-for-quote').addClass('hidden')
  $('#update-quote').addClass('hidden')
  $('#navbar').addClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('.search-results').html('')
  store.user = null
}
const signOutFailure = function (error) {
  $('#message').text('Error on sign Out' + error)
  $('#message').css('background-color', 'red')
  // console.log('signOutFailure ran. Data is:', error)
}
const addQuoteSuccess = function (data) {
  $('#message').text('Add quote')
  $('#message').css('background-color', 'green')
  $('#signOut').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#add-quote').removeClass('hidden')
  $('#search-for-quote').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
}
const addQuoteFailure = function (error) {
  $('#message').text('Error Adding Quote' + error)
  $('#message').css('background-color', 'red')
  // console.log('addQuoteFailure ran. Data is:', error)
}
const updateQuoteSuccess = function (data) {
  $('#message').text('Updated quote')
  $('#message').css('background-color', 'green')
  $('#update-quote-form')[0].reset()
  // console.log('Updated Quote')
}
const searchForQuoteSuccess = function (data) {
  $('.search-results').html('')
  let searchHTML = ''
  // console.log(data)
  // console.log(store)

  data.southerncultures.forEach((quoteData) => {
    // if (quoteData.user_id === store.user.id) {
    // store.quote.push(data)
    searchHTML += `<div class="tmp">
      <h6>quote: ${quoteData.quote}</h6>
      <h6>about: ${quoteData.about}</h6>
      <h6>image: <img src="${quoteData.image}"></h6>
      <h6>quoteId:${quoteData.id}</h6>
      </div>
      <BR>`
    // }
  })
  $('.search-results').append(searchHTML)
}

const updateQuoteFailure = function (error) {
  $('#message').text('Error on update quote' + error)
  $('#message').css('background-color', 'red')
  // console.log('updateFailure ran. Data is:', error)
}

const deleteQuoteSuccess = function (quoteData) {
  $('#message').text('Deleted Successfully')
  $('#message').css('background-color', 'green')
  $('.delete-results').html('')
  // let searchHTML = ''
  // data.southerncultures.forEach((user) => {
  //   searchHTML += `<div>
  //   <h6>User: ${user.quote}</h6>
  //   <h6>User: ${user.about}</h6>
  //   <h6>User: ${user.image}</h6>
  //   <h6>${user.id}</h6>
  //   </div>`
  // })
  // $('.delete-results').append(searchHTML)
  $('#delete-quote')[0].reset()
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  addQuoteSuccess,
  addQuoteFailure,
  searchForQuoteSuccess,
  deleteQuoteSuccess,
  updateQuoteSuccess,
  updateQuoteFailure
}
