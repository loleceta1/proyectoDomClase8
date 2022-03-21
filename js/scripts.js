const carrito = [];

const productos = [
    { id: 1, titulo: "Masajes Relajación", precio: 999, imagen: '../imagenes TARA/massage-therapy-1612308_1920.jpg' },
    { id: 2, titulo: "Reiki", precio: 800, imagen: '../imagenes TARA/hands-1327811_1920.jpg' },
    { id: 3, titulo: "Tratamiento Facial", precio: 1500, imagen: '../imagenes TARA/woman-3141766_1920.jpg'},
    { id: 4, titulo: "Tratamiento Corporal", precio: ' ',imagen: '../imagenes TARA/woman-567021_1920.jpg'},
];



generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-3">
                <div class="text-center">
                    <!-- Product name-->
                    <h6 class="fw-bolder">${elementoDelArray.titulo}</h6>
                    <!-- Product price-->
                    <span class=""></span> 
                    $ ${elementoDelArray.precio}
                    ${elementoDelArray.precio > 0 ? '' : 'No Disponible' }
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-3 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button 
                        onclick="agregarAlCarrito(${elementoDelArray.id})"
                        class="btn btn-outline-dark mt-auto" href="#">
                        Seleccionar
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-servicios").innerHTML = cards;
};

