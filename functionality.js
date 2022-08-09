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

// remove duplicate movies saved to the watchlist
const removeDuplicates = (array, key) => {
    const check = new Set()
    return array.filter(obj => !check.has(obj[key]) && check.add(obj[key]))
}

// save movies to watchlist
const saveMovieToWatchlist = movies => {
    const moviesWithNoDuplicates = removeDuplicates(movies, 'imdbID')
    localStorage.setItem('movies', JSON.stringify(moviesWithNoDuplicates))
}

// delete a movie from the watchlist
const deleteMovie = id => {
    const movieToDelete = movies.findIndex(movie => movie.imdbID === id)
    movies.splice(movieToDelete, 1)
}