'use strict'

var handlers = require('../handlers')
var Joi = require('joi')
var config = require('../config')

var routes = [
  {
    method: 'POST',
    path: '/',
    config: {
      handler: handlers.createDocument,
      description: 'Create xlsx document',
      validate: {
        payload: {
          output: 'stream',
          parse: true,
          data: Joi.array().required(),
          maxBytes: parseInt(config.PAYLOAD_MAX_SIZE, 10)
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: handlers.showFrontpage,
    config: {
      description: 'Show frontpage'
    }
  }
]

module.exports = routes
