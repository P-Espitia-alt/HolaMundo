let arrayGlobalDeImagenes = [];



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


    var myArray = ["A"];    
    //console.log(myArray[0]); // error

    myArray.push("B");

    // [0]
    // [1]

    // length == 2
    console.log(myArray[0]); // A
    console.log(myArray[1]); // B
    console.log(myArray.length); // 2

    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        console.log(element);
    }


    myArray.forEach(function(element, j) {
        console.log("Elemento en el índice " + j + ": " + element);
    });




    arrayGlobalDeImagenes.push("B");
    


}





// Tarea:
// en un array, guardar las urls que se reciben (todas)
// y luego mostrarlas todas juntas en el html del carrusel de bootstrap
// optional: llamar api de perros y mostrar las imagenes de perros
// extra: hacer un botón que muestre 1 imagen de gato/perro insertada en el html usando jquery





