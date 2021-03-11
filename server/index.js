const express = require('express');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors')
const app = express();
const port = 3000;
const axios = require('axios').default;

app.use(morgan('dev'));
app.use(cors());

app.use(express.static('./public'));

app.get('/hi', (req, res) => {
  res.send('Hello World!');
});

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

//add a get route that goes from react app
  //through proxy then to server
  //check for errors

app.get('/reviews/:id', async (req, res) => {
  var {data} = await axios.get(`http://localhost:3001/reviews/${req.params.id}`)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});