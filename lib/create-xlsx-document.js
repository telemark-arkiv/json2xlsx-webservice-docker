'use strict'

var xlsx = require('xlsx-writestream')

function createXlsxDocument (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'))
  }
  if (!options.data) {
    return callback(new Error('Missing required input: options.data'))
  }
  if (!options.docFilePath) {
    return callback(new Error('Missing required input: options.docFilePath'))
  }

  xlsx.write(options.docFilePath, options.data, function (err) {
    if (err) {
      return callback(err, null)
    }
    return callback(null, {status: 'File written: ' + options.docFilePath})
  })
}

module.exports = createXlsxDocument
