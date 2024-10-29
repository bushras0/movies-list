

const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.post('/', async (req, res) => {
    const { title, year, poster } = req.body;
    try {
        const newMovie = new Movie({ title, year, poster });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ error: 'Error adding movie' });
    }
});

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching movies' });
    }
});

router.put('/:id', async (req, res) => {
    const { title, year, poster } = req.body;
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { title, year, poster }, { new: true });
        res.json(updatedMovie);
    } catch (error) {
        res.status(400).json({ error: 'Error updating movie' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: 'Movie deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting movie' });
    }
});

module.exports = router;
