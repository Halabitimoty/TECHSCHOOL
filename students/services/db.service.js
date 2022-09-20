const mongoose = require('mongoose');
const config = require('dotenv').config();
const options = {
    autoIndex : false,
    useNewUrlParser : true
}

const connect = () => {
    mongoose.connect(process.env.DBURL, options).then(()=>{
        console.log("connected Sucessfully")
    }).catch( err => {
        console.log('Connection error' + err);
    })
}

connect();

exports.mongoose = mongoose;