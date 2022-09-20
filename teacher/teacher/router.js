/**
 * Required :
 * express
 * Router Function in express module
 */
const express = require('express');
const router  = express.Router();
const Teacher = require('./teacher');


/**
 * Codes
 */

/**Create Database */
router.post('/newTeacher', async (req, res) => {
    const data = new Teacher({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        username : req.body.username        
    });

    try {
        const dataTosave = await data.save();
        res.status(200).json(dataTosave);
        
    } catch (error) {
        res.status(400).json({message : error.message});
    }
});

/**Gets Teachers Data */
router.get('/getTeacher', async ( req, res ) => {

    try {
        const data = await Students.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});

/**Edit Teachers Data */
router.put('/editTeacher/:id', async ( req, res ) => {

    try {
        const id = req.params.id;
        const dataToedit = req.body;
        const options = { new : true };
        const result = await Students.findByIdAndUpdate(id, dataToedit, options);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});

/**Delete Teachers Data */
router.delete('/deleteTeacher/:id', async ( req, res ) => {

    try {
        const id = req.params.id;
        const dataToedit = req.body;
        const options = { new : true };
        const result = await Students.findByIdAndDelete(id, dataToedit, options);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});

module.exports = router;