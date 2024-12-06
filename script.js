

document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.querySelector('#lista-carrito tbody');
    const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
    const agregarCarritoBtns = document.querySelectorAll('.agregar-carrito');
    const carritoIcono = document.querySelector('#img-carrito');

    let productosEnCarrito = [];

    // Agregar producto al carrito
    agregarCarritoBtns.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            const producto = boton.closest('.box');
            const productoInfo = {
                id: boton.dataset.id,
                imagen: producto.querySelector('img').src,
                nombre: producto.querySelector('h3').textContent,
                precio: producto.querySelector('.precio').textContent
            };
            productosEnCarrito.push(productoInfo);
            actualizarCarrito();
        });
    });


    vaciarCarritoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        productosEnCarrito = [];
        actualizarCarrito();
    });


    function actualizarCarrito() {
      
        carrito.innerHTML = '';

        productosEnCarrito.forEach(producto => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td><img src="${producto.imagen}" width="50" /></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
            `;
            carrito.appendChild(fila);
        });

       
        carritoIcono.setAttribute('data-cantidad', productosEnCarrito.length);
    }
});

