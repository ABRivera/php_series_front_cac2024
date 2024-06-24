/* const API_SERVER = '';//api url
const options = {
    method: 'GET', // Método de la petición (GET)
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
        Authorization: 'Bearer token-string'
        
    }
};

// Función para cargar películas en el carrusel de series
const cargarSeries = async () => {
    // Realizamos una petición fetch a la API para obtener las series
    const response = await fetch(`${API_SERVER}/series`, options);
    const data = await response.json();// Convertimos la respuesta a JSON
    const series = data.results; // Extraemos las series de la respuesta
    const aclamadasContainer = document.querySelector('.aclamadas'); // Seleccionamos el contenedor de series aclamadas en el DOM
    
    // Iteramos sobre cada serie obtenida para lograr la estructura de html que pongo a continuación:
    //<div class="peliculaItem">
    //     <img class="imgAclamada" src="./assets/img/aclamada_1.jpg" alt="aclamada_1" loading="lazy">
    //  </div>
      series.forEach(serie => {
        // creo el div peliculaItem
        const serieItem = document.createElement('div');
        serieItem.classList.add('peliculaItem', 'mb-3', 'col-12', 'col-md-4');
        // creo la imagen
        const img = document.createElement('img');
        img.classList.add('imgAclamada');
        img.src = `https://webserverunkknown/assets/img/${serie.image}`;
        img.alt = serie.title;
        img.loading = 'lazy';
        // relaciono los elementos
        serieItem.appendChild(img);
        aclamadasContainer.appendChild(serieItem);
    });
};


// Ejecutamos las funciones de carga de películas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Cargamos las series en el carrusel de series
    cargarSeries();
}); */