# Chatounerie du Luberon

This is a showcase website for a professional activity.

You can visit the website at http://chatounerie-du-luberon.com/


# LICENSE

This program can be used for learning/teaching/personal use without prior authorization, but cannot be used for any commercial use.

# Architecture

The project is split into the `fronted` part and the `backend` part.

The backend mostly deal with sending emails through the contact form.

## Client

Built on top of react-create-app project. Acts as standalone project.
Requests are proxified to the backend server.


## Server

Built on top of Hapi.js, use Emailjs to send emails through the contact form.

# First deploiement (VPS)

1. Install nvm: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash`
1. `nvm install 6`
1. `npm i -g pm2`
1. `git clone https://github.com/Vadorequest/chatounerie-du-luberon.git`
1. `cd chatounerie-du-luberon`
1. `npm i && cd client && npm i && cd ../server && npm i`
1. `nano config-secret.yml` fill secret values, also update port if neededd
1. `pm2 start index.js --name chatounerie`
1. `cd .. && npm run prod` build a static version of the frontend and restarts the backend

Website should be available on the defined `http://localhost:port`.

## Re-Deploiment (update)

Run `git pull && npm run prod` which rebuilds the project and restart the pm2 process (server).
