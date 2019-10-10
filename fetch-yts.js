'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest 

var peli = [];
var usuarios = [];
var div_cine = document.querySelector("#cine");
fetch("https://yts.lt/api/v2/list_movies.json")
  .then(data => data.json())
  .then(peliculas => {
    peli = peliculas.data;
    console.log(JSON.stringify(peli.movies[19]['url']));
    peli.movies.map((name, i) => {
       let nombre = document.createElement('H3');
       let url = document.createElement('b');
      nombre.innerHTML = i + " --  " + name.title;
      url.innerHTML = name.url;
      div_cine.appendChild(nombre);
      div_cine.appendChild(url);

      
    });
  });
