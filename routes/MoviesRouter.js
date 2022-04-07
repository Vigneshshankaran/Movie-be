const express = require('express');
const mongoose = require('mongoose');
const Movies = require('../model/Movies');

const moviesRouter = express.Router()

//Post Method
moviesRouter.post('/post', async (req, res) => {
    const data = new Movies({
        name: req.body.name,
        rating: req.body.rating,
        cast: req.body.cast,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
moviesRouter.get('/getAll', async (req, res) => {
    try{
        const data = await Movies.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
moviesRouter.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Movies.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Update by ID Method
moviesRouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Movies.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//Delete by ID Method
moviesRouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Movies.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = moviesRouter;