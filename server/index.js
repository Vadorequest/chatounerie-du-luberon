'use strict';

const Hapi = require('hapi');
const Good = require('good');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3001
});

// Add the route
server.route({
  method: 'POST',
  path:'/sendContactForm',
  handler: function (request, reply) {

    return reply('hello world');
  }
});

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
