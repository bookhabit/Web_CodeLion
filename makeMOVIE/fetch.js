// TMDS > API KEY  29cd249466bdd9189984457e67134b91
const APIKEY = "29cd249466bdd9189984457e67134b91";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

// now-playing
const now_playingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`;
const now_playing = document.getElementById("now-playing");

fetch(now_playingURL, options)
  .then((responses) => responses.json())
  .then((responses) => {
    responses.results.forEach((element) => {
      //   console.log(element.title);  정보 잘 가져오는지 확인
      //   console.log(element.backdrop_path);
      //   console.log(element.vote_average);

      let movie = document.createElement("li");
      let movieDiv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMG_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "평점: " + element.vote_average;

      movieDiv.appendChild(backdrop);
      movieDiv.appendChild(title);
      movieDiv.appendChild(rate);
      movie.appendChild(movieDiv);
      now_playing.appendChild(movie);
    });
  });

// popular
// URL API에서 가져오기
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;

const popular = document.getElementById("popular");

fetch(popularURL, options)
  .then((responses) => responses.json())
  .then((responses) => {
    responses.results.forEach((element) => {
      let movie = document.createElement("li");
      let movieDiv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMG_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "평점: " + element.vote_average;

      movieDiv.appendChild(backdrop);
      movieDiv.appendChild(title);
      movieDiv.appendChild(rate);
      movie.appendChild(movieDiv);
      popular.appendChild(movie);
    });
  });

// top-rated
// URL API에서 가져오기
const top_ratedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;

const top_rated = document.getElementById("top-rated");

fetch(top_ratedURL, options)
  .then((responses) => responses.json())
  .then((responses) => {
    responses.results.forEach((element) => {
      let movie = document.createElement("li");
      let movieDiv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMG_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "평점: " + element.vote_average;

      movieDiv.appendChild(backdrop);
      movieDiv.appendChild(title);
      movieDiv.appendChild(rate);
      movie.appendChild(movieDiv);
      top_rated.appendChild(movie);
    });
  });

// upcoming
// URL API에서 가져오기
const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;

const upcoming = document.getElementById("upcoming");

fetch(upcomingURL, options)
  .then((responses) => responses.json())
  .then((responses) => {
    responses.results.forEach((element) => {
      let movie = document.createElement("li");
      let movieDiv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", IMG_URL + element.backdrop_path);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "평점: " + element.vote_average;

      movieDiv.appendChild(backdrop);
      movieDiv.appendChild(title);
      movieDiv.appendChild(rate);
      movie.appendChild(movieDiv);
      upcoming.appendChild(movie);
    });
  });
