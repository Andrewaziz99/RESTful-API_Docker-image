const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

require('dotenv').config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;
const dbname = process.env.MONGO_DBNAME;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    app.use(routes);

    app.listen(3000, () => {
      console.log('Server running on port 3000')
    });
  })
  .catch(err => console.log(err));


  module.exports = app;