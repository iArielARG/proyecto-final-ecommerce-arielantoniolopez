const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(carrito);

const items = document.querySelector(".items");

items.innerHTML = "";
let subtotal;
let total = 0;
carrito.forEach((item) => {
    const html = `
        <tr data-id="${item.id}">
            <td>${item.nombre} ${item.tamano}</td>
            <td><i id="refresh" class="fa-solid fa-plus"></i>        ${item.cantidad}        <i id="refresh" class="fa-solid fa-minus"></i></td>
            <td>$${item.precio}</td>
            <td>$${subtotal = item.precio * item.cantidad}</td>
        </tr>
    `;
total += subtotal
    items.innerHTML += html;
});

const resultado = document.querySelector(".total")
const htmlTotal = `
        <th></th>
        <th></th>
        <th>TOTAL</th>
        <th>$${total}</th>
`;
resultado.innerHTML = htmlTotal;


document.addEventListener('click', (event) => {
    if(event.target.classList.contains("fa-plus")){
        const id = event.target.closest("tr").dataset.id;
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
        setInterval("location.reload()",60);
    }
})

document.addEventListener('click', (event) => {
    if(event.target.classList.contains("fa-minus")){
        const id = event.target.closest("tr").dataset.id;
        const index = carrito.findIndex((item) => item.id == id);

        if(carrito[index].cantidad < 1){
            alert("La cantidad no puede ser menor a 0")
            localStorage.removeItem('carrito', JSON.stringify(carrito));
        } else {
            const producto = carrito[index];
            producto.cantidad--;
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        setInterval("location.reload()",60);
    }
})

