let pedido = [];
let total = 0;

function agregarPedido(plato, precio) {
    pedido.push({ plato, precio });
    total += precio;
    actualizarPedido();
}

function actualizarPedido() {
    const lista = document.getElementById('lista-pedido');
    lista.innerHTML = '';
    pedido.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.plato} - $${item.precio}`;
        lista.appendChild(li);
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

document.getElementById('formulario-pedido').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío por defecto
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;

    const datosPedido = {
        nombre,
        direccion,
        pedido,
        total
    };

    enviarPedido(datosPedido);
});

function enviarPedido(datos) {
    fetch('http://tu-servidor.com/api/pedidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        alert('Pedido enviado exitosamente');
        pedido = [];
        total = 0;
        actualizarPedido();
    })
    .catch(error => {
        console.error('Error al enviar el pedido:', error);
    });
}