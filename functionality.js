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
    // check if movieData is an array of movies or a movie obj
    // if (movieData.length > 1) {
    //     localStorage.setItem('movies', JSON.stringify(movieData))
    // } else if (movies.length === 0) {
    //     movies.push(movieData)
    //     localStorage.setItem('movies', JSON.stringify(movies))
    // } else if (movies.length > 0) {
    //     // make sure a movie can only be saved once
    //     const filteredMovies = movies.filter(movie => (
    //         movie.imdbID !== movieData.imdbID
    //     ))
    //     console.log(filteredMovies)
    //     if (filteredMovies.length !== 0) {
    //         movies.push(movieData)
    //         localStorage.setItem('movies', JSON.stringify(movies))
    //     }
    // } else {
    //     throw new Error('You broke the saveMovieToWatchlist function')
    // } 

    // movies.push(movieData)
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