// src/index.js
const express = require('express');
const { PORT } = require('./config/server.config');

const apiRouter = require('./routes');

const app = express();

app.use(express.json());

// health check
app.get('/ping', (req, res) => {
  return res.json({ message: 'Problem Service is alive' });
});

// mount all routes
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
