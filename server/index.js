'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Good = require('good');
const Joi = require('joi');
const Boom = require('boom');
const email = require("emailjs");
const yaml = require('yamljs');
const merge = require('lodash.merge');
// XXX Relish allows to customize Hapi errors for front-end friendly error messages. See https://github.com/dialexa/relish
const Relish = require('relish')({
  messages: {
    identity: 'Nom et prénom obligatoires',
    email: 'Email obligatoire',
    phone: 'Numéro de téléphone obligatoire',
    message: 'Message obligatoire',
  }
});

// Load both public config and private config and merge them.
const config = merge({}, yaml.load('./config.yml'), yaml.load('./config-secret.yml'));

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: process.env.HOST || config.host,
  port: process.env.PORT || config.port,
});


server.register([
  require('inert'),
  {
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
  }
], (err) => {

  if (err) {
    throw err; // something bad happened loading the plugin
  }


  // Add the routes
  server.route({
    method: 'POST',
    path:'/sendContactForm',
    handler: function (request, reply) {
      const mailServer = email.server.connect(config.email.provider);
      const payload = request.payload;

      mailServer.send({
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
                           ${payload.identity} vient d'effectuer une demande via le formulaire de contact de http://chatounerie-du-luberon.com<br/>
                         </p>
                         <hr/>
                         <p>
                             "${payload.message.replace(/\r?\n/g, '<br />')}"
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
        console.log(message); // XXX For debug and logs.
        if(err) {
          Boom.badRequest(err);
        }

        return reply({
          statusCode: err ? 400 : 200,
          message: err
            ? err.message
            : "Votre demande a bien été envoyée. Nous vous remercions.\nSi vous ne deviez pas avoir de réponse sous 3 jours ouvrés, merci de nous contacter par téléphone."
        });
      });
    },
    config: {
      validate: {
        failAction: Relish.failAction,
        payload: {
          identity: Joi.string().required(),
          email: Joi.string().email().required(),
          phone: Joi.string().required(),
          message: Joi.string().required(),
        }
      }
    }
  });

  // XXX This route serves all assets in the build folder. (Ofc, the build folder should be generated before the server starts
  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../client/build'),
        listing: false,
        index: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/config',
    handler: function (request, reply) {
      return reply(config.client);
    }
  });

  server.start((err) => {

    if (err) {
      throw err;
    }
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});
