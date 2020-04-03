const express = require('express');
const { log } = require('./src/configs/winstonConfig');

global.log = log;


const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  global.log('App is listening on port 3000 ...');
});
