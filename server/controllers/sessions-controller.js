
// currently out of mvp scope

const pg = require('pg'); // postgres library
const sessionsController = require('./users-controller');


const sessionController = {};

sessionController.setCookie = (req, res, next) => {
  res.cookie('codesmith', 'hi');
  res.cookie('secret', Math.floor(Math.random() * 99));
  console.log(`Here's the res.cookie: ${res.cookie}`);
  next();
};

module.exports = sessionController;
