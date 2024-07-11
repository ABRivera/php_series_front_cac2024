//cuando el dom se cargue 
document.addEventListener('DOMContentLoaded', async () => {
    // Peticion fetch a la api para obtener todas las series:
    // configuracion de options, es un get y no necesita body
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('http://localhost/php_series_back_cac2024/series.php', options);
    const data = await response.json();
    console.log(data);
    // Extraemos las series de la respuesta
    const series = data;
    /*<!--ejemplo estructura:
					<tr>
						<td scope="row">1</td>
						<td scope="row"><img class="img-fluid img-thumbnail" width="150px" src="../assets/img/breaking_bad.jpg" alt="Breaking Bad poster"> </td>
						<td scope="row">Breaking Bad</td>
						<td scope="row">62</td>
						<td scope="row"><button type="button" class="btn btn-danger">Eliminar</button></td>
					</tr>
    */
  
    //obtenemos el tbody de la tabla
    const tbody = document.getElementById('bodyTableSeries');
    // recorremos todas las series
	//tv_series (id_series, title, release_date, runtime, episodes, genres, synopsis, image)
    series.forEach(serie => {
        // creamos un tr
        const tr = document.createElement('tr');
		// creamos un td con el id
        const tdId = document.createElement('td');
        tdId.textContent = serie.id_series;
		// creamos un td con la imagen
        const tdImage = document.createElement('td');
        const img = document.createElement('img');
        img.src = "../assets/img/" + serie.image;
        img.width = '150';
        img.alt = serie.title;
        tdImage.appendChild(img);
        img.classList.add('img-fluid');
        img.classList.add('img-thumbnail');
        // creamos un td con el titulo
        const tdTitle = document.createElement('td');
        tdTitle.textContent = serie.title;
        // creamos un td con les episodios
        const tdEpisodes = document.createElement('td');
        tdEpisodes.textContent = serie.episodes;
        // creamos un td con los generos
        const tdGenres = document.createElement('td');
        tdGenres.textContent = serie.genres;
        // añadimos los td al tr
        tr.appendChild(tdId);
        tr.appendChild(tdImage);
        tr.appendChild(tdTitle);
        tr.appendChild(tdEpisodes);
        tr.appendChild(tdGenres);
        // añadimos el tr a al body
        tbody.appendChild(tr);

    });
});