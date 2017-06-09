# Chatounerie du Luberon

This is a showcase website for a professional activity.

You can visit the website at http://chatounerie-du-luberon.com/


# LICENSE
Even though the source code is public (Github), the code source **is not**.

This program can be used for learning/teaching/personal use without prior authorization, but cannot be used for any commercial use.

# Architecture

The project is split into the `fronted` part and the `backend` part.

The backend mostly deal with sending emails through the contact form.

## Client

Built on top of react-create-app project. Acts as standalone project.
Requests are proxified to the backend server.


## Server

Built on top of Hapi.js, use Emailjs to send emails through the contact form.


# Deployment

Run `npm run prod` which rebuilds the project and restart the pm2 process (server).
