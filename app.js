const express = require('express')
const app = express()
const port = 3002

app.use(express.json())//jsonを使えるようにするよという記述

// ここからPOSTMANにて実践
// 本来ならデータベースに保存するが今回は省略
app.post('/booklog',(req,res) => {
  const booklog =  req.body

  // if (!true)の意味は本来とは逆転してfalseという意味になる
  if (!(booklog.name && booklog.text)) {
    return res.json({
      "ok": false,
      "error": "invalid parameter"
    })
  }

    res.json({
      "ok":true,
      "booklog": booklog
    })
  })

app.listen(port,() => {//この第二引数は無名関数という
  console.log('app listening at http://localhost:${port}');
})
// 機能(コード)を追記したらサーバー再起動