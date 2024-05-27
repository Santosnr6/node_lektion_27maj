import { Router } from 'express';
import { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie } from '../services/movies.js';

const router = Router();

// GET all movies
router.get('/', async (req, res) => {
    const movies = await getAllMovies();
    res.json({ movies : movies });
})

// GET specific movie
router.get('/:id', async (req, res) => {
    const movie = await getMovieById(req.params.id);
    res.json({ movie : movie });
});

// POST new movie
router.post('/', (req, res) => {
    createMovie(req.body);
    res.json({ message : "Movie created successfully" });
});

// PUT specific movie
router.put('/:id', (req, res) => {
    updateMovie(req.params.id, req.body);
    res.json({ message : "Movie updated successfully" });
});

// DELETE specific movie
router.delete('/:id', (req, res) => {
    deleteMovie(req.params.id);
    res.json({ message : "Movie deleted successfully" });
});

export default router;