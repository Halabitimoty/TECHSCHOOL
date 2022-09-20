const mongoose = require('mongoose');
const config = require('dotenv').config();

/**DATABASE SERVICE */
const options = {
    autoIndex : false,
    useNewUrlParser : true,
}

const connect = () => {
    mongoose.connect(process.env.DBURL, options).then(()=>{
        console.log("connected Sucessfully")
    }).catch( err => {
        console.log('Connection error' + err);
    })
}

connect();


/**SCHEMA / MODEL */
const schema = mongoose.Schema;
const Student = new schema({
    firstname : String,
    lastname  : String,
    email     : String,
    username  : String
},{ timestamps : true });


exports.mongoose = {
    mongoose : mongoose, 
    model : mongoose.model('Students', Student)
};