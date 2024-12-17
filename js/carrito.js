carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(carrito);

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
    
    const html = `
        <tr data-id="${item.id}">
            <td>${item.nombre} ${item.tamano}</td>
            <td><i class="fa-solid fa-plus"></i>        ${item.cantidad}        <i class="fa-solid fa-minus"></i></td>
            <td>$${item.precio}</td>
            <td>$${item.precio * item.cantidad}</td>
        </tr>
    `;

    items.innerHTML += html;
});