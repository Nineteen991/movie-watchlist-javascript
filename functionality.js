"use strict"

// get saved movies from local storage
const getSavedMovies = () => {
    const savedMovies = localStorage.getItem('movies')

    try {
        return savedMovies ? JSON.parse(savedMovies) : []
    } catch (error) {
        return []
    }
}

// get saved movies
const movies = getSavedMovies()

// save movies to watchlist
const saveMovieToWatchlist = movieData => {
    localStorage.setItem('movies', JSON.stringify(movies))
}

// delete all saved movies
const deleteAllMovies = () => {
    movies = []
}

const deleteMovie = id => {
    const movieToDelete = movies.findIndex(movie => movie.imdbID === id)
    movies.splice(movieToDelete, 1)
}