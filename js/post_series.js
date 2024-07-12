// cuando el dom se cargue
document.addEventListener('DOMContentLoaded', async () => {
    // levantar los datos del formulario y validar los inputs antes de hacer la peticion fetch
    // si los datos son correctos, realizo la peticion fetch post a la api para agregar
    
    formNueva = document.getElementById('form-nueva-serie');
    //agrego el evento submit al formulario
    formNueva.addEventListener('submit', async (event) => {
        //prevengo el comportamiento por defecto del formulario
        event.preventDefault();
        //obtengo los datos del formulario
        const formData = new FormData(formNueva);
        //obtengo los valores de los inputs
        const titulo = formData.get('titulo');
        const lanzamiento = formData.get('fechaLanzamiento');
        const duracion = formData.get('duracion');
		const episodios = formData.get('episodios');
        const genero = formData.get('genero');
        const sinopsis = formData.get('sinopsis');
        const imagen = formData.get('img');
        //valido los inputs
        if (titulo === '' || lanzamiento === '' || duracion === '' || episodios === '' || genero === '' || sinopsis === '' || imagen === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        // levanto solo el nombre del file para enviarlo a la api
        const imageName = imagen.name;
      
        //configuracion de options, es un post y necesita body
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo: titulo,
				lanzamiento: lanzamiento,
                duracion: duracion,
				episodios: episodios,
				genero: genero,
				sinopsis: sinopsis,
                imagen: imageName
            })
        };
        //realizo la peticion fetch a la api para agregar
        const response = await fetch('http://localhost/php_series_back_cac2024/series.php', options);
        const data = await response.json();
		console.log(data);
        //si la respuesta es correcta (201), muestro un mensaje de exito y limpio los inputs del formulario
        if (response.status === 201) {
            alert('Serie agregada correctamente');
            formNueva.reset();
            // recargo la pagina
            location.reload();
        } else {
            alert('Error al agregar la serie');
        }
       
	});

});