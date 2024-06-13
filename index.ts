const express = require('express')
const app = express()
const port = process.env.PORT || 5010;
import { Request, Response } from 'express';
import db from './src/models';

app.get('/', (req:Request, res:Response) => {
  db.User.findAll({
      
  }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})


db.sequelize.sync().then(() => {
  app.listen(port, () => {
      console.log(`App listening on port ${port}`)
  })
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })