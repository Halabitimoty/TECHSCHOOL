const express = require('express');
const router = express.Router();
const Students = require('../students/services/model');
const Teachers = require('../students/services/model');
const {verifyToken, verifyUser} = require('./authmiddleware');

/**
 * Students Model
 * 
 */
router.post('/newstudent', async ( req, res ) =>{
    const data = new Students({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        username : req.body.username
    });

    try {
        const dataTosave =  await data.save();
        res.status(200).json(dataTosave)
        
    } catch (error) {
        res.status(400).json({ message : error.message})
    }
});

//url/api/getstudents
router.get('/getStudents',verifyUser,async ( req, res ) => {

    try {
        const data = await Students.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});

//url/api/edistudents
router.put('/editStudents/:id', async ( req, res ) => {

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

//url/api/deletestudents
router.delete('/deleteStudents/:id', async ( req, res ) => {

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


/**
 * 
 * Techers Model
 * 
 */

router.post('/newTeacher', async ( req, res ) =>{
    const data = new Teachers({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        username : req.body.username
    });

    try {
        const dataTosave =  await data.save();
        res.status(200).json(dataTosave)
        
    } catch (error) {
        res.status(400).json({ message : error.message})
    }
});

//url/api/getTeachers
router.get('/getTeachers',verifyUser,async ( req, res ) => {

    try {
        const data = await Teachers.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});

//url/api/editTeachers
router.put('/editTeachers/:id', async ( req, res ) => {

    try {
        const id = req.params.id;
        const dataToedit = req.body;
        const options = { new : true };
        const result = await Teachers.findByIdAndUpdate(id, dataToedit, options);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});

//url/api/deleteTeachers
router.delete('/deleteTeachers/:id', async ( req, res ) => {

    try {
        const id = req.params.id;
        const dataToedit = req.body;
        const options = { new : true };
        const result = await Teachers.findByIdAndDelete(id, dataToedit, options);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
});
module.exports = router