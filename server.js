const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// load config vars
dotenv.config({ path: './config/config.env'});

// connnect DB
connectDB();

const app = express();

//body parser
app.use(express.json());

app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);