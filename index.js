const express = require('express');
const cors = require('cors')

const app = express();
const feedRoute = require('./app/routes/feed');

app.use(cors())
app.use('/api/v1', feedRoute);

app.listen(5000, () => {
  console.log('Running on port 5000...');
});

// Export the Express API
module.exports = app;