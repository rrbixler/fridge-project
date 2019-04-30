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

const showGrocerySuccess = function (data) {
  console.log('show grocery successfully!', data)
  const showGroceryHtml = showFridgeTemplate({ groceries: data.groceries.food_type })
  const catGrocery = showGroceryHtml.food_type.filter(`${data.food_type}`)
  $('.content').html(catGrocery)
}

const indexGroceryFailure = function (data) {
  console.log('index index failed --', data)
}

const clearFridge = () => {
  $('.content').empty()
}

module.exports = {
  createGrocerySuccess,
  createGroceryFailure,
  indexGrocerySuccess,
  indexGroceryFailure,
  showGrocerySuccess,
  clearFridge
}
