const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

//request logger
app.use(morgan('tiny'))
// use cors
app.use(cors());

app.use(express.json());
app.use(cookieParser());

// routes 
app.use(require('./routes'));


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})