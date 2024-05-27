import { log } from 'console';
import nedb from 'nedb-promises';

const database = new nedb({ filename : 'movies.db', autoload : true});

// Add new movie
async function createMovie(movie) {
    try {
        const newMovie = await database.insert(movie);
        console.log(newMovie);
    } catch(error) {
        console.error(error);
    }
}

// Get all movies
async function getAllMovies() {
    try {
        const movies = await database.find({});
        return movies;
    } catch(error) {
        console.error(error);
    }
}

// Get specific movie
async function getMovieById(id) {
    return await database.findOne({ imdbid : id });
}

// Update movie

async function updateMovie(id, updatedMovie) {
    const movie = await database.findOne({ imdbid : id });
    return await database.update({ _id : movie._id}, { $set : updatedMovie });
}

// Delete movie
async function deleteMovie(id) {
    const deletedMovie = await database.remove({ imdbid : id });
    console.log(deletedMovie);
}

export { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie }