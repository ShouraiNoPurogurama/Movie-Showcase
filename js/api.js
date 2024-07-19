const fetchMovie = async (movieURL) => {
    //wait til axios returns api's data then continue
    const response = await axios.get(movieURL);
    const movies = response.data.results;
    const items = movies.map((movie) => {
        // console.log(movie)
        //ES6
        return `
        <a class="item" href="./movie.html?id=${movie.id}">
            <div class="bottom-fading2"></div>
            <img class="fade-img" src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="">
            <div class="item-content">
                <h2 class="item-title">${movie.name==undefined?movie.title:movie.name}</h2>
                <p id="item-overview">${movie.overview}</p>
                <button id="show-Trailer" onclick="showTrailer()", on>TRAILER</button>
            </div>
            <div class="bottom-fading"></div>
        </a>`;

    });

    const singleCarousel = document.getElementById("single-carousel");
    singleCarousel.innerHTML = items.join("");
};

const fetchMoviesRow = async (api, title, isBackdrop) => {
    const response = await axios.get(api);
    const movies = response.data.results;
    // console.log(response)
    const body = document.getElementById("body");
    if (isBackdrop == 'false') {
        body.innerHTML += ` <div class="movie-row">
    <div class="movie-row__title">
        <h3>${title}</h3>
    </div>

    <div class="movie-row__items">
        <div class="responsive-carousel">
            ${movies.map((movie) => {
            return `<a class="item" href="./movie.html?id=${movie.id}">
                    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="" />
                </a>`
        })
            }
        </div>
    </div>
</div>`
    }
    else {
        body.innerHTML += ` <div class="movie-row">
    <div class="movie-row__title">
        <h3>${title}</h3>
    </div>

    <div class="movie-row__items movie-row_isBackdrop">
        <div class="responsive-carousel">
        ${movies.map((movie) => {
            return `<a class="item" href="./movie.html?id=${movie.id}">
                <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" />
            </a>`
        })
            }
        </div>
    </div>
</div>`;
    }
}

const fetchAndRender = async () => {
    await fetchMovie("https://api.themoviedb.org/3/movie/now_playing?api_key=fb94d2912555938a631b21f267b54e76&language=en-US&page=1");
    await fetchMoviesRow("https://api.themoviedb.org/3/movie/upcoming?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US", "Trending Now", "false");
    await fetchMoviesRow("https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=35", "Top Rated", "true");
    await fetchMoviesRow("https://api.themoviedb.org/3/trending/all/week?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US", "Comedy Movie", "true");
    initCarousel();
};

fetchAndRender();