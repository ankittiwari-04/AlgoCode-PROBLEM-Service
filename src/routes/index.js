// routes/index.js
const express = require('express');
const problemRouter = require('./v1/problem.routes');

const router = express.Router();

// mount problems routes under /v1/problems
router.use('/v1/problems', problemRouter);

module.exports = router;
