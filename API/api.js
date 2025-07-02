
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
            mostrarImagen(data.image);
        })
        .catch(error => console.error('Error:', error));
}

function imagenes() {
    for (let i = 0; i < 5; i++) {
        pz();
    }
}


/// Esta función mostrará las imagenes usando una url
function mostrarImagen(url) {

    console.log("url que llega:",url);

    // usar la url para modficar src del elemento img en el html
    $("#imagen").attr('src', url);


}