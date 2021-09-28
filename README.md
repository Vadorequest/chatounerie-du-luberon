Chatounerie du Lubéron
===

Showcase website using Next.js, hosted on Firebase, for no cost. ($0/year)

Next.js framework helps with SEO even though the project uses React which isn't SEO friendly by default.

# Getting started

- `nvm use`
- `yarn start` - Start local server (with HMR)
- `yarn deploy` - Build and deploy website on Firebase

> Note: If you get `HTTP Error: 401, Request had invalid authentication credentials. Expected OAuth 2 access token...` when deploying then it means the credentials have expired, run `yarn login:force`

# Deployment

When building the project, a `.dist` folder is created, which is then uploaded using Firebase

# Images

Optimize images using https://tinypng.com/
