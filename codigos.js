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

let carrito = [];

for (const producto of productosAComprar) {
  let carta = document.createElement('div');
  carta.className = 'hola card col-md-4';
  carta.innerHTML = `
    <div class="chau card">
    <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
    <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary comprar-btn">Comprar</button>
    </div>
    `;
  productosMostrados.appendChild(carta);
  
  let comprar = carta.querySelector('.comprar-btn');

  comprar.addEventListener('click', () => {
    carrito.push({
      nombre: producto.nombre,
      marca: producto.marca,
      precio: producto.precio,
    });
    console.log(carrito);
  });
};

// filtrados

// funcion para mostrar el filtrado y los productos 

function mostrarProductosBazar() {
  // Borrar cualquier producto existente
  productosMostrados.innerHTML = '';

  // Filtrar los productos por la categoría 'Bazar'
  let productosFiltrados = productosAComprar.filter((producto) => {
    return producto.categoria === 'Bazar';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de bazar
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
          <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);

    let comprar = carta.querySelector('.comprar-btn');

    comprar.addEventListener('click', () => {
      carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
      });
      console.log(carrito);
    });
  }
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

  // Crear y mostrar tarjetas de productos para los productos filtrados de almacen
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
          <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);

    let comprar = carta.querySelector('.comprar-btn');

    comprar.addEventListener('click', () => {
      carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
      });
      console.log(carrito);
    });
  }
}

let almacenButton = document.getElementById('Almacen');
almacenButton.addEventListener('click', mostrarProductosAlmacen);

 // funcion para mostrar el filtrado y los productos bebidas
function mostrarProductosBebidas() {
  productosMostrados.innerHTML = '';

  let productosBebidas = productosAComprar.filter((producto) => {
    return producto.categoria === 'Bebidas';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de bebidas
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
          <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);

    let comprar = carta.querySelector('.comprar-btn');

    comprar.addEventListener('click', () => {
      carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
      });
      console.log(carrito);
    });
  }
}

let bebidasButton = document.getElementById('Bebidas');
bebidasButton.addEventListener('click', mostrarProductosBebidas);

// productos congelados
function mostrarProductosCongelados() {
  productosMostrados.innerHTML = '';

  let productosCongelados = productosAComprar.filter((producto) => {
    return producto.categoria === 'Congelados';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de congelados
  for (const producto of productosCongelados) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);

    let comprar = carta.querySelector('.comprar-btn');

    comprar.addEventListener('click', () => {
      carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
      });
      console.log(carrito);
    });
  }
}

let congeladosBotton = document.getElementById('Congelados');
congeladosBotton.addEventListener('click', mostrarProductosCongelados);

// fiambres 
function mostrarProductosFiabres() {
  productosMostrados.innerHTML = '';

  let productosFiabres = productosAComprar.filter((producto) => {
    return producto.categoria === 'Fiambrería';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de fiambrería
  for (const producto of productosFiabres) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);

    let comprar = carta.querySelector('.comprar-btn');

    comprar.addEventListener('click', () => {
      carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
      });
      console.log(carrito);
    });
  }
}

let fiambresBotton = document.getElementById('Fiambreria');
fiambresBotton.addEventListener('click', mostrarProductosFiabres);

// Frutas y verdudas
function mostrarProductosVerduleria() {
  productosMostrados.innerHTML = '';

  let productosVerduras = productosAComprar.filter((producto) => {
    return producto.categoria === 'FrutasYVerduras';
  });

  // Crear y mostrar tarjetas de productos para los productos filtrados de frutas y verduras
  for (const producto of productosVerduras) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);

    let comprar = carta.querySelector('.comprar-btn');

    comprar.addEventListener('click', () => {
      carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
      });
      console.log(carrito);
    });
  }
}

let VerdurasBotton = document.getElementById('FrutasYVerduras');
VerdurasBotton.addEventListener('click', mostrarProductosVerduleria);

// liempieza 
function mostrarProductosLimpieza() {
  productosMostrados.innerHTML = '';

  let productosLimpieza = productosAComprar.filter((producto) => {
    return producto.categoria === 'Limpieza';
  });

  // Create and display product cards for the filtered cleaning products
  for (const producto of productosLimpieza) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);

    let comprar = carta.querySelector('.comprar-btn');

    comprar.addEventListener('click', () => {
      carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
      });
      console.log(carrito);
    });
  }
}

let liempiezaBotton = document.getElementById('Limpieza');
liempiezaBotton.addEventListener('click', mostrarProductosLimpieza);

// panaderia 
function mostrarProductosPanaderia() {
  productosMostrados.innerHTML = '';

  let productosPanaderia = productosAComprar.filter((producto) => {
    return producto.categoria === 'Panadería';
  });

  // Crear y mostrar las tarjetas de productos para los productos filtrados de panadería
  for (const producto of productosPanaderia) {
    let carta = document.createElement('div');
    carta.className = 'hola card col-md-4';
    carta.innerHTML = `
      <div class="chau card">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-title">${producto.marca}</h6>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary comprar-btn">Comprar</button>
        </div>
      </div>
    `;
    productosMostrados.appendChild(carta);

    let comprar = carta.querySelector('.comprar-btn');

    comprar.addEventListener('click', () => {
      carrito.push({
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
      });
      console.log(carrito);
    });
  }
}

let panaderiaBotton = document.getElementById('Panaderia');
panaderiaBotton.addEventListener('click', mostrarProductosPanaderia);

