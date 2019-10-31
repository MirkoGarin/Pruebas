'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest 
var peli = [];
var usuarios = [];
var div_cine = document.querySelector("#cine");
fetch("https://yts.lt/api/v2/list_movies.json")
  .then(data => data.json())
  .then(peliculas => {
	peli = peliculas.data;
	//console.log(JSON.stringify(peli.movies[19]['torrents'][0]['url'] ));
	peli.movies.map((name, i) => {
	let nombre = document.createElement('p');
	let url = document.createElement('a');
	let torrent = document.createElement('a');
      // let thumbnail = document.createElement('imag')
	nombre.innerHTML = i + " --  " + name.title_long;
	url.innerHTML = name.url + "</br>" ;
	torrent.innerHTML = name.torrents[0].url + "<hr>" ;

	url.href = name.url  ;
        torrent.href= name.torrents[0].url;

	div_cine.appendChild(nombre);
	div_cine.appendChild(url);
	div_cine.appendChild(torrent);

    });

  });
