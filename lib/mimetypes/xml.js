var Stream = require('stream').Stream

// lolwat JUST TROLLIN
module.exports = XMLParser

function XMLParser() {

  Stream.call(this)
}

var cons = XMLParser
  , proto = cons.prototype = new Stream

proto.writable = function() {
  return true
}

proto.end = process.exit.bind(process, 0)
