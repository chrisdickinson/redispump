# redispump

A command line tool to pump arbitrary data to a redis pubsub channel.

````sh

$ tail -f /var/log/nginx/error.log | redispump -c channelname
$ tail -f /var/log/nginx/error.log | redispump -c channelname -a localhost:6379
$ tail -f /var/log/nginx/error.log | redispump -c channelname -a localhost:6379 --mimetype text/plain

````

## Installation

````sh

$ npm install -g redispump
# yay, you're done

````

## CLI

#### -c [channelname]
#### --channel [channelname]

**Required.** The name of the channel to publish to.

#### -a [host:port]
#### --addr [host:port]
#### --address [host:port]

The host and port of the redis server to publish to.

#### -m [mimetype]
#### --mimetype [mimetype]

The mimetype to use when parsing incoming data.

Available mimetypes are:

* `text/plain`: Publishes each line in a file to redis.
* `application/json`: Publishes each top level item in JSON output to redis.


## LICENSE

MIT
