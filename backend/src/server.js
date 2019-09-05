const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://<username>:<password>@cluster8-x6rlk.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);