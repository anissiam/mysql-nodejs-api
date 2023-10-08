const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const postsRoutes = require('./routes/posts');
app.use(bodyParser.json());

app.use('/posts', postsRoutes);
module.exports = app;