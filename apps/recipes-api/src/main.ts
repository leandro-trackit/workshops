/* tsyringe needs this. */
import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import { greetingsRouter } from './greetings/greetings.router';
import { recipesRouter } from './recipes/recipes.router';

const app = express();

app.use(cors());
app.use(greetingsRouter);
app.use(recipesRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
