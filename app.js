const express = require('express')
const app = express()
const port = 3002

app.listen(port,() => {//この第二引数は無名関数という
  console.log('app listening at http://localhost:${port}');
})