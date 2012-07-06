var Stream = require('stream').Stream

module.exports = LineParser

function LineParser() {
  this.data = '' 

  Stream.call(this)
}

var cons = LineParser
  , proto = cons.prototype = new Stream

proto.writable = function() {
  return true
}

proto.end = function() {
  if(self.data)
    self.emit('data', self.data)
}

proto.write = function(data) {
  var self = this
    , idx 
    , bits

  self.data += data
  idx = self.data.indexOf('\n')

  if(idx === -1) {
    return
  }

  self
    .data
    .split('\n')
    .forEach(function(s, x, a) {
      if(x !== a.length-1)
        self.emit('data', s)
      else
        self.data = s
    })
}

