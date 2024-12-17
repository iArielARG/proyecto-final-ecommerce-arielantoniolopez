
const cargarProductos = async () => {
    try{
        const response = await fetch("./js/productos.json");
        productos = await response.json();
        mostrarProductos();
    } catch (error) {
        console.error(error);
    }
};

const mostrarProductos = () => {
    const section = document.querySelector("section");

    section.innerHTML = "";

    productos.forEach((producto) => {
        const html = `
            <article class="producto" data-id="${producto.id}">
                <h2>${producto.nombre}</h2>
                <h2>${producto.tamano}</h2>
                <img src="${producto.image}" alt="${producto.nombre}">
                <p>${producto.description}</p>
                <p><strong>PRECIO: $${producto.precio}</strong></p>
                <button class="btn-agregar">Añadir al carrito</button>
            </article>`;
            section.innerHTML += html;
    });
};

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.addEventListener('click', (event) => {
    if(event.target.classList.contains("btn-agregar")){
        const id = event.target.closest("article").dataset.id;
        const index = carrito.findIndex((item) => item.id == id);

        if(index == -1){
            const elemento = productos.find((producto) => producto.id == id);
            console.log(elemento);

            const {nombre, tamano, precio} = elemento;

            const producto = {
                id: id,
                nombre: nombre,
                tamano: tamano,
                precio: precio,
                cantidad: 1,
            }

            carrito.push(producto);
        } else {
            const producto = carrito[index];
            producto.cantidad++;
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert("El producto fue agregado al carrito exitosamente!");
    }
})