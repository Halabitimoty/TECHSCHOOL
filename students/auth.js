const espress = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Studebt = require('./services/model');

/**
 * 
 * STUDENT LOGIN ROUTE
 */
router.post('/studentlogin', async (req, res) => {
    try{
        const user = await Student.findOne({
            email: req.body.email,
            username: req.body.username
        });
        !user && res.status(401).json("wrong username");
        const accessTokken = jwt.sign({
            id : user._id,
            email : user.email,
            username : user.username
        },
        process.env.JWT_KEY,
        {expiresIn : "2d"});

        const {...others} = user._doc;
        res.status(200).json({...others, accessTokken});
    }
    catch (error){
        res.status(500).json({messgae : error.message});
    }
});


/**
 * 
 * TEACHER LOGIN ROUTE
 */
router.post('/teacherlogin', async (req, res) => {
    try{
        const user = await Teacher.findOne({
            email: req.body.email,
            username: req.body.username
        });
        !user && res.status(401).json("wrong username");
        const accessTokken = jwt.sign({
            id : user._id,
            email : user.email,
            username : user.username
        },
        process.env.JWT_KEY,
        {expiresIn : "2d"});

        const {...others} = user._doc;
        res.status(200).json({...others, accessTokken});
    }
    catch (error){
        res.status(500).json({messgae : error.message});
    }
});

module.exports = router;