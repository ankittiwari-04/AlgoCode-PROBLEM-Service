const express = require('express');
const router = express.Router();

const problemsRoutes = require('./problems.routes'); // ✅ Make sure file exists

router.use('/problems', problemsRoutes);

module.exports = router;
