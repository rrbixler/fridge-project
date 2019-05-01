'use strict'
const showFridgeTemplate = require('../templates/fridge-list.handlebars')

const createGrocerySuccess = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`Grocery added to fridge!`).show()
  setTimeout(() => {
    $('.messages').text(' ').hide()
  }, 2000)
}

const createGroceryFailure = function (data) {
  $('form').trigger('reset')
}

const indexGrocerySuccess = function (data) {
  const showFridgeHtml = showFridgeTemplate({ groceries: data.groceries })
  $('.content').html(showFridgeHtml)
}

const showGrocerySuccess = function (data) {
  const showGroceryHtml = showFridgeTemplate({ groceries: data.groceries })
  const catGrocery = showGroceryHtml.food_type.filter(`${data.food_type}`)
  $('.content').html(catGrocery)
}

const showCategorySuccess = function (data) {
  const showCatHtml = showFridgeTemplate({ groceries: data.groceries })
  $('.content').html(showCatHtml)
}

const indexGroceryFailure = function (data) {
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
  clearFridge,
  showCategorySuccess
}
