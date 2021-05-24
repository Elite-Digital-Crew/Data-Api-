const express = require('express')
const dataSchema = require('../models/data schema')
const router = express.Router()
const data_schema = require('../models/data schema')

//get all data
router.get('/', async (req, res) => {
    try{
        const getdata = await data_schema.find()
        res.json(getdata)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }

})
//get one
router.get('/:id', (req, res) => {
    
})
//create 1
router.post('/', async(req, res) => {
    const outputObj = new data_schema({
        Title: req.body.Title,
        image: req.body.image,
        Desc: req.body.desc,
        difficulty: req.body.difficulty,
        units: req.body. units,
        data: [{
            exercise: req.body.exercise,
            torc: req.body.torc,
        }]
    }) 
    try {
        const newObj = await outputObj.save()
        res.status(201).json(newObj)
    } catch (err){
        res.status(400).json({message: err.message})
    }  
})

//update 1
router.patch('/:id', (req, res) => {
    
})
//delete 1
router.delete('/:id', (req, res) => {
    
})










module.exports = router