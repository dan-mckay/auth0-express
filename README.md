auth0-express
=============

An Express application to test-drive Auth0.


To get this app to work, you must register with Auth0 and place your provided credentials in the following location: `config/credentials.js`

The credentials must be exported as an object as follows:

```javascript
module.exports = {
  domain:       '<your auth0 domain>',
  clientID:     '<your auth0 clientID>',
  clientSecret: '<your auth0 clientSecret>'
};

