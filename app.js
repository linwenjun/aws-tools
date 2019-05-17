const express = require('express')
const app = express()
const port = 3000
const shelljs = require('shelljs');

app.get('/', (req, res) => {
  let command = "aws ecr get-login --no-include-email --region cn-northwest-1"
  shelljs.exec(command, (code, stdout)=> {
    res.send(stdout)
  })
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))