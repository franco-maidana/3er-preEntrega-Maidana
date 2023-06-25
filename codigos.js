const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

// cartas 

let productosMostrados = document.getElementById('cartas');

for (const producto of productosAComprar) {
  let carta = document.createElement('div')
  carta.className = 'hola card col-md-4';
  carta.innerHTML = `
    <div class="chau card">
    <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
    <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <buton class="btn btn-primary">Comprar</button>
    </div>
    `;
  productosMostrados.appendChild(carta);
}

// filtrados

let ver = productosAComprar.filter((productosAComprar) => {
  return productosAComprar.categoria;
})
console.log(ver);

let bazar = document.getElementById('Bazar');
console.log(bazar);