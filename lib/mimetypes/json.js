var JSONStream = require('JSONStream')

module.exports = JSONParser

function JSONParser() {
  return JSONStream.parse([true])
}

