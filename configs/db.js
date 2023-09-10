const mongoose = require('mongoose');
const {URL} = require("../utlis/config")

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) .then(() => {
    console.log("connected to mongoDB");
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(-1);
})});