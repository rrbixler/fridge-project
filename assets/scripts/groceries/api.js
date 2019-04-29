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
    url: config.apiUrl + 'groceries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGrocery = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `groceries/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteGrocery = function (id) {
  return $.ajax({
    url: config.apiUrl + `groceries/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGrocery = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `groceries/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGrocery,
  getGroceries,
  showGrocery,
  deleteGrocery,
  updateGrocery
}
