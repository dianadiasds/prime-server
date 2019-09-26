const express = require('express');

const app = express();
const cors = require('cors');
const primeNumberRoutes = require('./routes/primenumber');

const corsMiddleware = cors();
app.use(corsMiddleware);
app.use(primeNumberRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Prime Numbers Listening on port ${port}!`);
});
