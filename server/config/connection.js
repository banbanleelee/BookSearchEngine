
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost:27107/book-search-engine-googleapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  } 
);

module.exports = mongoose.connection;