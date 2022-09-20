const mongoose = require('../services/db.service').mongoose;
const schema = mongoose.Schema;
const Student = new schema({
    firstname : String,
    lastname  : String,
    email     : String,
    username  : String
},{ timestamps : true });


const Teacher = new schema({
    firstname : String,
    lastname  : String,
    email     : String,
    username  : String
},{ timestamps : true });

// module.exports = {
//     student : mongoose.model('Students', Student),
//     teacher : mongoose.model('Teachers', Teacher)
// }

module.exports = mongoose.model('Students', Student);
module.exports = mongoose.model('Teachers', Teacher);
