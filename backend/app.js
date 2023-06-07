const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
/* const helmet = require('helmet'); */
const mongoose = require('mongoose');
const { errors } = require('celebrate');
/* const corsHandler = require('./middlewares/corsHandler'); */
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes/index');
const generalErrorHandler = require('./middlewares/generalErrorHandler');
const nonexistentPathErrorHandler = require('./middlewares/nonexistentPathErrorHandler');

const { PORT = 3001 } = process.env;

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2000,
});

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

/* const corsOptions = {
  origin: true,
  credentials: true,
}; */

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

/* app.use(corsHandler); */

app.use(cookieParser());

app.use(limiter);
/* app.use(helmet()); */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(cors(corsOptions));

app.options(cors(corsOptions));

app.use('/', router);

app.use(errorLogger);

app.use(errors());
app.use('*', nonexistentPathErrorHandler);
app.use(generalErrorHandler);

app.listen(PORT, () => {
  console.log(PORT);
});
