const express = require('express');

const bugRoute = express.Router();
const {postBugs,allBugs} = require('../controllers/bugController.js');

bugRoute.post('/bugs',postBugs);
bugRoute.get('/bugs',allBugs);



module.exports = bugRoute;