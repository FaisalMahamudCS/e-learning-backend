const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
  res.json({
    "Hey":"E-learning"
  })
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})