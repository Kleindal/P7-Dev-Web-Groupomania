const express = require('express')
const app = express()
const path = require('path');
var cors = require('cors');

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

const signRoute = require('./routes/sign.route');
const userRoute = require('./routes/user.route');
const groupRoute = require('./routes/group.route');
app.use('/api/sign', signRoute);
app.use('/api/users', userRoute);
app.use('/api/groups', groupRoute);


module.exports = app;
