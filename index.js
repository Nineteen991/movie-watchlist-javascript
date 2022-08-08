"use strict"

const searchForm = document.getElementById('movie-search-form')
const searchBar = document.getElementById('searchbar')
const searchResults = document.getElementById('search-results')
let movieData

// get movie data from OMDb api
const getMovie = async (movie) => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=b1eb06c0&t=${movie}`)
    movieData = await res.json()
    renderMovies(movieData)
}

// on submit send input data to OMDb api
searchForm.addEventListener('submit', e => {
    e.preventDefault()
    // don't search empty values
    if (searchBar.value) {
        getMovie(searchBar.value)
    }
    e.target.reset()
})

// render returned OMDb api data
const renderMovies = () => {
    const movieElem = `
        <div class="movie">
            <img src="${movieData.Poster}" class="movie-poster" />
            <div class="movie-info">
                <h1 class="movie-title">
                    ${movieData.Title}
                    <img src="./images/star.png" class="star-icon" />
                    ${movieData.imdbRating}
                </h1>
                <div class="movie-data-div">
                    <h4 class="movie-data">${movieData.Runtime}</h4>
                    <h4 class="movie-data">${movieData.Genre}</h4>
                    <p id="add-to-watchlist-btn"><i>Add to Watchlist</i></p>
                </div>
                <p class="movie-desc">${movieData.Plot}</p>
            </div>
            <hr />
        </div>
    `
    searchResults.innerHTML = movieElem

    // setup watchlist event listener
    const watchlistBtn = document.getElementById('add-to-watchlist-btn')
    watchlistBtn.addEventListener('click', () => {
        movies.push(movieData)
        saveMovieToWatchlist(movies)
    })
}