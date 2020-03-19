//7cc96ef4f6c904fcf64218b3241be7dc


const movies = document.querySelector("#movies");

const xhr = new XMLHttpRequest();

window.addEventListener("load", function() {
  const end = 
  `https://api.themoviedb.org/3/movie/now_playing?api_key=7cc96ef4f6c904fcf64218b3241be7dc&language=en-US&page=1`;

  xhr.open("GET", end);

  xhr.send();

  xhr.addEventListener("readystatechange",populate)

});



function populate() {

  if(xhr.readyState == 4) {

    const json = JSON.parse(xhr.responseText);

    for(let i = 0; i < json.results.length;i++) {
      movies.innerHTML += `<br>${json.results[i].title}`
    }

  }

}

