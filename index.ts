const express = require('express')
const app = express()
const port = process.env.PORT || 5020;
import { Request, Response } from 'express';
import db from './src/models'; 
import courseRoute from './src/routes/courseRoutes'
const cors = require('cors');


app.use(cors())
app.use('/api/course',courseRoute)

app.get('/', (req:Request, res:Response) => {
  db.User.findAll({
      
  }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})

db.sequelize.sync({ alter: true }).then(() => {
  console.log("DB Sync Successful");

  const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

  // Proper shutdown handling
  const shutdown = () => {
    server.close(() => {
      console.log('Process terminated');
      process.exit(0);
    });
  }; 

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    shutdown();
  });

}).catch((err:any) => {
  console.error('Unable to sync the database:', err);
});
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })