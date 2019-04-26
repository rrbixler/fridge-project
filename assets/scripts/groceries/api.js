'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createGrocery = function (data) {
  return $.ajax({
    url: config.apiUrl + 'groceries/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getGroceries = function () {
  return $.ajax({
    url: config.apiUrl + '/groceries/',
    method: 'GET'
  })
}

const deleteGrocery = function (id) {
  return $.ajax({
    url: config.apiUrl + `/groceries/${id}`,
    method: 'DELETE'
  })
}

module.exports = {
  createGrocery,
  getGroceries,
  deleteGrocery
}
