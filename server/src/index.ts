// import test from "./test/index.js";
import serverless from 'serverless-http';
import cors from 'cors'
import express from 'express';
import { logger } from './utils/morganConfig.js';
import { securedHeader } from './utils/securedHeader.js';


import {
  productsRoute,
  transactionsRoute,
  usersRoute
} from './routes/index.js'

const app = express();

// 1. use logger
app.use(logger);
// 2. use securedHeader
app.use(securedHeader);
// 3. epxress.json
app.use(express.json());
// 4. cors
const allowedOrigins = [
  "https://bikinin.site",
  "https://bikinin.site/form",
  "http://localhost:3000",
  "http://localhost:3000/form"
] as any[];
app.use(
  cors(
    {
    origin(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  }
  )
)
// 5. openapi

// 6. routes
// app.use('/request-component', requestComponentRoute);
// app.use('/user', userRoute);
// app.use('/login', loginRoute);
app.use('/transactions', transactionsRoute);
app.use('/users', usersRoute);
app.use('/products', productsRoute)

// app.use('/requirement-form', requirementFormRoute);

const PORT=5003
app.listen(PORT, ()=>{
    console.log("listening at " + PORT);
}) 
export const handler = serverless(app);