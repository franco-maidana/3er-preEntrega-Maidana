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

// funcion para mostrar el filtrado y los productos 
function mostrarProductosBazar() {
  
  // borrar cualquier producto existente 
  productosMostrados.innerHTML = '';

  // filtramos el producto por categoria 'Bazar'
  let productosFiltrados = productosAComprar.filter((producto) => {
    return producto.categoria === 'Bazar';
  });

  // creamos y mostramos tarjeta de productos para los  productos filtrados bazar
  for (const producto of productosFiltrados) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);
  };
}

// agarramos el elemento del boton 
let bazarButton = document.getElementById('Bazar');

// agregamos el evento al boton
bazarButton.addEventListener('click', mostrarProductosBazar);


// funcion para mostrar el filtrado y los productos Almecen
function mostrarProductosAlmacen() {
  productosMostrados.innerHTML = '';

  let productosAlmacen = productosAComprar.filter((producto) => {
    return producto.categoria === 'Almacen';
  });

  // creamos y mostramos tarjeta de productos para los  productos filtrados bazar
  for (const producto of productosAlmacen) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);
  }
}

let almacenButton = document.getElementById('Almacen');

almacenButton.addEventListener('click', mostrarProductosAlmacen);



function mostrarProductosBebidas() {
  productosMostrados.innerHTML = '';

  let productosBebidas = productosAComprar.filter((producto) => {
    return producto.categoria === 'Bebidas';
  });

  for (const producto of productosBebidas) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);
  }
}

let bebidasButton = document.getElementById('Bebidas');

bebidasButton.addEventListener('click', mostrarProductosBebidas);


function mostrarProductosCongelados() {
  productosMostrados.innerHTML = '';

  let productosBebidas = productosAComprar.filter((producto) => {
    return producto.categoria === 'Congelados';
  });

  for (const producto of productosBebidas) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);
  }
}

let congeladosBotton = document.getElementById('Congelados');

congeladosBotton.addEventListener('click', mostrarProductosCongelados);
