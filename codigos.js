const burger = document.querySelector('.burger');
const nav = document.querySelector('nav-links');
const verCarrito = document.getElementById('carrito');
const mostrandoCarro = document.getElementById('mostrandoCarrito');




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

// Verificar si hay un carrito guardado en el almacenamiento local
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

for (const producto of productosAComprar) {
  let carta = document.createElement('div');
  carta.className = 'holaCard col-md-4';
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
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });
  }
}

let panaderiaBotton = document.getElementById('Panaderia');
panaderiaBotton.addEventListener('click', mostrarProductosPanaderia);

// escuchador de eventos en el carrito de compras 
verCarrito.addEventListener('click', () => {
  // Creación de un modal, primero creamos un div
  const modalHeader = document.createElement('div');
  modalHeader.className = 'carrito';
  modalHeader.innerHTML = `
    <h1 class='tituloDelModal'>Carrito</h1>
  `;
  mostrandoCarro.append(modalHeader);
  // Creando botón para salir
  const button = document.createElement('h1');
  button.innerText = 'X';
  button.className = 'botonModal';
  button.addEventListener('click', () => {
    mostrandoCarro.innerHTML = ''; // Elimina el contenido del modal
  });
  modalHeader.append(button);
  let totalAPagar = 0; // Variable para almacenar el total a pagar
  carrito.forEach((product, index) => {
    let carritoContent = document.createElement('div');
    carritoContent.className = 'holaQueHace';
    carritoContent.innerHTML = `
      <h5>${product.nombre}</h5>
      <h6>${product.marca}</h6>
      <p>${product.precio}</p>
      <button class="quitarProducto" data-index="${index}">Quitar</button>
    `;
    mostrandoCarro.appendChild(carritoContent);
    totalAPagar += parseFloat(product.precio.replace('$', '')); // Actualizar el total a pagar
  });
  const totalpag = document.createElement('div');
  totalpag.className = 'totalContent';
  totalpag.innerHTML = `Total a pagar: ${totalAPagar} `;
  mostrandoCarro.append(totalpag);
  // Agregar evento de clic a los botones "Quitar"
  const quitarBotones = document.querySelectorAll('.quitarProducto');
  quitarBotones.forEach((boton) => {
    boton.addEventListener('click', (event) => {
      const index = event.target.dataset.index;
      const precioProducto = parseFloat(carrito[index].precio.replace('$', ''));
      carrito.splice(index, 1); // Eliminar el producto del carrito
      event.target.parentElement.remove(); // Eliminar el elemento del DOM sin cerrar el modal
      totalAPagar -= precioProducto; // Restar el precio del producto eliminado al total a pagar
      totalpag.innerHTML = `Total a pagar: ${totalAPagar} `; // Actualizar el total a pagar en el modal
      // Actualizar los botones "Quitar" con los nuevos índices
      const nuevosBotones = document.querySelectorAll('.quitarProducto');
      nuevosBotones.forEach((nuevoBoton, newIndex) => {
        nuevoBoton.dataset.index = newIndex;
      });
    });
  });
});