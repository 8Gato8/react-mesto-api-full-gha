const express = require('express');
require('dotenv').config();
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes/index');
const generalErrorHandler = require('./middlewares/generalErrorHandler');
const nonexistentPathErrorHandler = require('./middlewares/nonexistentPathErrorHandler');

const { PORT = 3000 } = process.env;

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 2000,
});

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(cors());

app.use('/', router);

app.use(errorLogger);

app.use(errors());
app.use('*', nonexistentPathErrorHandler);
app.use(generalErrorHandler);

app.listen(PORT);
