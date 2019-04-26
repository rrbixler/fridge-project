'use strict'

const createExampleSuccess = function (data) {
  console.log('created example successfully!', data)
}

const createExampleFailure = function (data) {
  console.log('created example failed --', data)
}

const indexExampleSuccess = function (data) {
  console.log('index example successfully!', data)
}

const indexExampleFailure = function (data) {
  console.log('index index failed --', data)
}

module.exports = {
  createExampleSuccess,
  createExampleFailure,
  indexExampleSuccess,
  indexExampleFailure
}
