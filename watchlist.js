"use strict"

const watchlist = document.getElementById('watchlist-results')
const emptyWatchlist = `
        <li class="results-msg">
            Your watchlist is looking a little empty...
        </li>
        <li><a href="./index.html" id="add-movies-link" class="links">
            Let's add some movies!
            </a>
        </li>
    `

// render returned OMDb api data
const renderWatchlist = movies => {

    // if there are no movies in the array; render emptyWatchlist
    if (movies.length === 0) {
        watchlist.innerHTML = emptyWatchlist
    } else if (movies.length > 0) {
        // clear the watchlist before rendering
        watchlist.innerHTML = ''
        
        movies.map(movie => {
            const movieLi = document.createElement('li')
            const img = new Image()
            const movieInfoDiv = document.createElement('div')
            const movieH1 = document.createElement('h1')
            const starImg = document.createElement('img')
            const movieDataDiv = document.createElement('div')
            const runtimeH4 = document.createElement('h4')
            const genreH4 = document.createElement('h4')
            const deleteBtn = document.createElement('p')
            const desc = document.createElement('p')

            movieLi.setAttribute('class', 'movie')

            img.src = movie.Poster
            img.setAttribute('class', 'movie-poster')

            movieInfoDiv.setAttribute('class', 'movie-info')

            movieH1.setAttribute('class', 'movie-title')

            starImg.src = `./images/star.png`
            starImg.setAttribute('class', 'star-icon')

            movieH1.innerHTML = movie.Title
            movieH1.appendChild(starImg)
            movieH1.innerHTML += movie.imdbRating

            movieDataDiv.setAttribute('class', 'movie-data-div')

            runtimeH4.setAttribute('class', 'movie-data')
            runtimeH4.textContent = movie.Runtime
            
            genreH4.setAttribute('class', 'movie-data')
            genreH4.textContent = movie.Genre

            deleteBtn.setAttribute('id', "remove-from-watchlist-btn")
            deleteBtn.textContent = 'Remove movie from watchlist'

            desc.setAttribute('class', 'movie-desc')
            desc.textContent = movie.Plot

            // Add an event listener for the delete btn
            deleteBtn.addEventListener('click', () => {
                deleteMovie(movie.imdbID)
                saveMovieToWatchlist(movies)
                renderWatchlist(movies)
            })

            movieDataDiv.appendChild(runtimeH4)
            movieDataDiv.appendChild(genreH4)
            movieDataDiv.appendChild(deleteBtn)
            
            movieInfoDiv.appendChild(movieH1)
            movieInfoDiv.appendChild(movieDataDiv)
            movieInfoDiv.appendChild(desc)

            movieLi.appendChild(img)
            movieLi.appendChild(movieInfoDiv)

            // add movies to the watchlist
            watchlist.appendChild(movieLi)
        })
    } else {
        throw new Error('rendering watchlist broken')
    }
}

renderWatchlist(movies)
