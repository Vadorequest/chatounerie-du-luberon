'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Joi = require('joi');
const Boom = require('boom');
const email = require("emailjs");

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
    const server = email.server.connect(config.email.provider);
    const payload = request.payload;

    server.send({
      to: config.email.to,
      cc: config.email.cc,
      text: JSON.stringify(payload, null, 4), // XXX Alternative text if HTML isn't supported.
      from: `${payload.identity} <${payload.email}>`,
      subject: `[Chatounerie] Demande de renseignements de ${payload.identity}`,
      attachment: [
        {
          data: `<html>
                    <div>
                        <p>
                          ${payload.identity} vient d'effectuer une demande via le formulaire de contact de chatounerie-du-luberon.com<br/>
                        </p>
                        <hr/>
                        <p>
                            "${payload.message}"
                        </p>
                        <hr/>
                        <p>
                            Email: ${payload.email}<br/>
                            Téléphone: ${payload.phone}<br/>
                        </p>
                    </div>
                  </html>`,
          alternative: true
        },
      ],
    }, function(err, message) {
      if(err) {
        Boom.badRequest(err);
      }

      return reply({
        statusCode: err ? 400 : 200,
        message: err
          ? err.message
          : "Votre demande a bien été envoyée. Nous vous remercions.<br/>Si vous ne deviez pas avoir de réponse sous 3 jours ouvrés, merci de nous contacter par téléphone."
      });
    });
  },
  config: {
    validate: {
      payload: {
        identity: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        message: Joi.string().required(),
      }
    }
  }
});

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    return reply('404');
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
