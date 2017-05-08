'use strict';

const Hapi = require('hapi');
const Good = require('good');

const config = require('./config.json');

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

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    const email = require("emailjs");
    const server = email.server.connect(config.email);

    server.send({
       text:    "i hope this works",
       from:    "you <username@your-email.com>",
       to:      "<ambroise.dhenain@gmail.com>",
       // cc:      "else <else@your-email.com>",
       subject: "testing emailjs"
    }, function(err, message) { console.log(err || message); });

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
