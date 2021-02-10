import express from 'express';
import {json} from 'body-parser';

const app = express();

//
app.use(json());

// routes
app.get('/api/users/current-user', (req,res,next) => {
  res.send('Hi you!');
})

export default app;