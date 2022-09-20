/** 
 * Required Dependencies
 * express
 * dotenv
*/
const express = require('express');
const dotenv  = require('dotenv').config();
const teacher = require('./teacher/router');
                require('./teacher/teacher');

/**
 * Initializations
 */
const app = express();
const port = process.env.PORT || 3201;

/**
 * Codes
 */
app.use(express.json);



app.get('/', ( req, res) => {
    res.json({ message :  "welcome to staudent management application"});
});

app.use('/api/teacher', teacher); 

/**
 * App listen
 */
app.listen(port, () => {
    console.log(`server connected at ${port} ...`)
});