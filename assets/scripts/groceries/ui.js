'use strict'
const showFridgeTemplate = require('../templates/fridge-list.handlebars')

const createGrocerySuccess = function (data) {
  console.log('created grocery successfully!', data)
}

const createGroceryFailure = function (data) {
  console.log('created grocery failed --', data)
}

const indexGrocerySuccess = function (data) {
  console.log('index grocery successfully!', data)
  const showFridgeHtml = showFridgeTemplate({ groceries: data.groceries })
  $('.content').html(showFridgeHtml)
}

const indexGroceryFailure = function (data) {
  console.log('index index failed --', data)
}

module.exports = {
  createGrocerySuccess,
  createGroceryFailure,
  indexGrocerySuccess,
  indexGroceryFailure
}
