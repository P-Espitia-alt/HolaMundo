
function pg() {
    fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => {
            if (!data.ok) {
                throw new Error(`Error: ${data.status}`);
            }
            return data.json();
        })
        .then(data => {
            console.log(data);
            mostrarImagen(data[0].url);
        })
        .catch(error => console.error('Error:', error));
}

function imagen() {
    for (let i = 0; i < 5; i++) {
        pg();
    }
}

<img src="document.get" alt="Logo de HTML5"
    srcset="imagen_1200w.jpg 1200w,
             imagen_900w.jpg 900w,
             imagen_400w.jpg 400w"
    sizes="(width > 900px) 900px,
            ((width > 480px) and (width <= 800px)) 480px,
            ((width <= 480px)) 320px"

/>





function pz() {
    fetch('https://randomfox.ca/floof/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => {
            if (!data.ok) {
                throw new Error(`Error: ${data.status}`);
            }
            return data.json();
        })
        .then(data => {
            console.log(data);
            mostrarImagen(data.message);
        })
        .catch(error => console.error('Error:', error));
}

function imagenes() {
    for (let i = 0; i < 5; i++) {
        pz();
    }
}
