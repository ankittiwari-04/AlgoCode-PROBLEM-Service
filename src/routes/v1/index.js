const express = require('express');
const ProblemRouter = require('./problems.routes');
const v1Router = express.Router();

// If any request comes and route continues with /problem then we map it to problem Router.
v1Router.use('/problems', ProblemRouter);
module.exports = v1Router;