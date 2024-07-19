const path = window.location.search;
const params = new URLSearchParams(path);
const movieID = params.get("id");


const fetchMovieDetail = async () => {
    const movieBackground = document.getElementById("movie-background");
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=a10ee5569194b352bcca20840b7f8a32`);
    const movie = response.data;
    const movie_info = document.getElementById("movie_info");
    movieBackground.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    movie_info.innerHTML += `         <h2>${movie.title}</h2>
    <p>
        ${movie.overview}
    </p>
    <button id="show-Trailer" onclick="showTrailer()", on>TRAILER</button>`
};

const fetchMovieTrailer = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=a10ee5569194b352bcca20840b7f8a32`);
    const trailerURL = `https://www.youtube.com/embed/${response.data.results[4] == null ? response.data.results[0].key : response.data.results[4].key}`
    const modal = document.getElementById("modal")
    modal.innerHTML += `<iframe id="trailer-video" width="1380" height="480" 
    src="${trailerURL}" 
    frameborder="0" 
    allow="accelerometer; 
    autoplay; clipboard-write; 
    encrypted-media; gyroscope; 
    picture-in-picture; web-share" 
    allowfullscreen>
    </iframe>
    `
}

function showTrailer() {
    fetchMovieTrailer();
    const modal = document.getElementById("modal");
    const button = document.getElementById("show-Trailer");
    modal.style.display = "block"
    button.style.zIndex = 0;
}

function hideTrailer() {
    const modal = document.getElementById("modal");
    const button = document.getElementById("show-Trailer");
    const trailer_video = document.getElementById("trailer-video") ;
    trailer_video.remove();
    modal.style.display = "none";
    button.style.zIndex = 100;;
}

fetchMovieDetail();
fetchMovieTrailer();