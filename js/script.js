fetch("./js/posts.json")
.then((response) => response.json())
.then((posts) => {
    posts.forEach(post => {
    const section = document.querySelector("section");

    section.innerHTML = "";

    posts.forEach((post) => {
        const html = `
            <article class="producto">
                <h2>${post.name}</h2>
                <h2>${post.size}</h2>
                <img src="${post.image}" alt="${post.name}">
                <p>${post.description}</p>
                <p><strong>PRECIO: $${post.amount}</strong></p>
                <button>Añadir al carrito</button>
            </article>`;
            section.innerHTML += html;
    });
});
}).catch((error) => {
    console.log(error);
});