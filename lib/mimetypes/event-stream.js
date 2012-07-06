var Stream = require('stream').Stream

module.exports = ESParser

function ESParser() {


  Stream.call(this)
}

var cons = ESParser
  , proto = cons.prototype = new Stream

proto.writable = function() {
  return true
}
