'use strict'

var uuid = require('uuid')
var createXlsxDocument = require('../lib/create-xlsx-document')

function showFrontpage (request, reply) {
  reply({
    message: 'Only POST is supported'
  })
}

function createDocument (request, reply) {
  var data = request.payload.data
  var temporaryName = uuid.v4() + '.xlsx'
  var docFilePath = process.cwd() + '/uploads/' + temporaryName
  var options = {
    docFilePath: docFilePath,
    data: data
  }
  createXlsxDocument(options, function (err, res) {
    if (err) {
      reply(err)
    }
    console.log(res)
    reply.file(docFilePath)
  })
}

module.exports.showFrontpage = showFrontpage

module.exports.createDocument = createDocument
