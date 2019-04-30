'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateGrocery = function (event) {
  event.preventDefault()
  // $('.modal-open').removeClass()
  // $('.fade').hide()
  const data = getFormFields(event.target)
  api.createGrocery(data)
    .then(ui.createGrocerySuccess)
    .catch(ui.createGroceryFailure)
}

const onGetGroceries = function (event) {
  event.preventDefault()

  api.getGroceries()
    .then(ui.indexGrocerySuccess)
    .catch(ui.indexGroceryFailure)
}

const onShowGrocery = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  // const grocery = groceries.filter(grocery => grocery.food_type === data)
  console.log(data)
  // console.log(grocery)
  api.showGrocery(data, id)
    .then(ui.showGrocerySuccess)
    .catch(ui.showGroceryFailure)
}

const onDeleteGrocery = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(id)
  api.deleteGrocery(id)
    .then(() => onGetGroceries(event))
    .catch(ui.failure)
}

const onClearFridge = (event) => {
  event.preventDefault()
  ui.clearFridge()
}

const onUpdateGrocery = (event) => {
  event.preventDefault()
  $('.modal-open').removeClass()
  $('.fade').hide()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  console.log(data)
  api.updateGrocery(data, id)
    .then(() => onGetGroceries(event))
    .catch(ui.failure)
}

const addHandlers = function () {
  $('#create-grocery').on('submit', onCreateGrocery)
  $('#index-groceries').on('submit', onGetGroceries)
  $('#clearFridgeButton').on('click', onClearFridge)
  $('#content').on('click', '.delete', onDeleteGrocery)
  $('#content').on('submit', '.update-grocery', onUpdateGrocery)
  $('#show-grocery').on('submit', onShowGrocery)
}

module.exports = {
  addHandlers
}
