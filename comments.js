// create web server
// listen to port 8080
// respond to requests with a simple message

//Load the http module to create an http server.
var http = require('http');
var url = require('url');
var comments = [];

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var path = url_parts.pathname;

  console.log('URL Path: ' + path);
  console.log('URL Query: ' + query);

  if (path == '/comment') {
    if (query.comment) {
      comments.push(query.comment);
    }
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(comments.join('\n'));
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Page not found');
  }
});

// Listen on port 8080, IP defaults to