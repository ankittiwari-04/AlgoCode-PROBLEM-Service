const express = require('express');
const v1Router = express.Router();

const problemRouter = require('./problem.routes');

// Mount problem routes under /problems
v1Router.use('/problems', problemRouter);

module.exports = v1Router;
