'use strict'

var tap = require('tap')
var createDocument = require('../lib/create-xlsx-document')

tap.test('requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  createDocument(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options docFilePath too exist', function (test) {
  var options = {
    data: true,
    docFilePath: false
  }
  var expectedErrorMessage = 'Missing required input: options.docFilePath'
  createDocument(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires options.data too exist', function (test) {
  var options = {
    templateFilePath: true,
    data: false
  }
  var expectedErrorMessage = 'Missing required input: options.data'
  createDocument(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
