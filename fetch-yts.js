'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest 
var peli = [];
var usuarios = [];
var div_cine = document.querySelector("#cine");
fetch("https://yts.mx/api/v2/list_movies.json")
  .then(data => data.json())
  .then(peliculas => {
	peli = peliculas.data;
	
	console.log(peli.movies[0].medium_cover_image);
	
	peli.movies.map((name, i) => {
	let nombre = document.createElement('h3');
	let url = document.createElement('a');
	let torrent = document.createElement('a');
	let img = document.createElement('img');
	
	nombre.innerHTML = i + " --  " + name.title_long;
	url.innerHTML = name.url + "</br>" ;
	torrent.innerHTML = name.torrents[0].url + "<br>" ;
	img.innerHTML = name.medium_cover_image + "</hr>" ;
	
	url.href = name.url  ;
	img.href = name.medium_cover_image;
        torrent.href= name.torrents[0].url;
	img.src =  img.href;	

	div_cine.appendChild(nombre);
	div_cine.appendChild(url);
	div_cine.appendChild(torrent);
	div_cine.appendChild(img);

    });

  });
