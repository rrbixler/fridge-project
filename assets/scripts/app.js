'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./auth/events.js')
const groceryEvents = require('./groceries/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  userEvents.addHandlers()
  groceryEvents.addHandlers()
})
