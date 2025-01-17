'use strict'

const { version } = require('../../package.json')

module.exports.migration = {
  version: '2.0.0',
  toVersion: version,
  up: function (config) {
    if (typeof config.allowCycles === 'boolean') {
      delete config.allowCycles
    }

    return config
  }
}
