require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { log, error } = require("./utlis/logger");
const { URL } = require("./utlis/config");
const usersRouter = require("./controllers/usersRoutes");
const loginRouter = require("./controllers/loginRoutes");
const apiRoutes = require('./routes/api');


app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

mongoose
  .connect(URL)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    error(err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to URL Shortener</h1>");
});

app.use(usersRouter);
app.use('/api', apiRoutes);
app.use(loginRouter);


module.exports = app;
