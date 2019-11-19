const express = require('express')

const app = express();

app.use('/', (req, res) => {
  res.send('ddd')
})

app.listen(3000, () => {
  console.log('port===3000')
})