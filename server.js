const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/pedidos', (req, res) => {
    const pedido = req.body;
    console.log('Pedido recibido:', pedido);

    // Aquí deberías integrar con la API del TPV.
    // Por ejemplo, puedes enviar estos datos al TPV usando una solicitud HTTP.

    res.status(200).json({ mensaje: 'Pedido recibido correctamente' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});