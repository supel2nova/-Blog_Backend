const mongoose = require('mongoose');
const app = require('./api/server');

const config = require('./config');

const boot = async () => {
  // Connect to mongodb
  await mongoose.connect(config.mongoUri);
  // Start express server
  app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
};

boot();