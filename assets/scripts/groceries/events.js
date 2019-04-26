'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateGrocery = function (event) {
  event.preventDefault()

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

const onDeleteGrocery = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  api.deleteGrocery(id)
    .then(() => onGetGroceries(event))
    .catch(ui.failure)
}

const addHandlers = function () {
  $('#create-grocery').on('submit', onCreateGrocery)
  $('#index-groceries').on('submit', onGetGroceries)
  $('#content').on('click', '.delete', onDeleteGrocery)
}

module.exports = {
  addHandlers
}
