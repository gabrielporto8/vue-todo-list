const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv:...', {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3334);