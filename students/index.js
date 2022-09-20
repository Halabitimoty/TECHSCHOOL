const http    = require('http');
const express = require('express');
const student = require('./route');
const teacher = require('./route');
const config  = require("dotenv").config();
                require('./services/db.service');

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

app.use(express.json());

// const server = http.createServer(( req, res ) => {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('Hello World1');
// });

app.get('/', ( req, res) => {
    res.json({ messgae :  "welcome to student management application"});
});

app.use('/api/student', student); 
app.use('/api/teacher', teacher);

app.listen( port, hostname, ()=>{
    console.log(`server running on http://${hostname}:${port}`);
})
