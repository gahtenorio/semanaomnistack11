const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionControler = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions',SessionControler.create)

routes.get('/ongs', OngController.index);
routes.get('/incidents',IncidentController.index);
routes.get('/profile', ProfileController.index);
 
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

  module.exports = routes;