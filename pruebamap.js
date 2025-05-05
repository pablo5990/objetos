let inventario = new Map([
    [3, "Galletas"],
    [2, "Papas",],
    [1, "Chocolate"],
    [0, "Gaseosa"],
    [4, "Chicle"]
]);

const mostrarInventario = () => {
    let mensaje = "Inventario:\n";
    let index = 1;
    for (let [producto, cantidad] of inventario) {
        mensaje += `${index}. ${producto} - Stock: ${cantidad}\n`;
        index++;
    }
    alert(mensaje);
};

const comprarProducto = (codigo) => {
    if (codigo < 1 || codigo > inventario.size) {
        alert("Código inválido. Usa un número del 1 al 5.");
        return;
    }

    let productos = Array.from(inventario.keys());
    let producto = productos[codigo - 1];
    let stockActual = inventario.get(producto);

    if (stockActual > 0) {
        inventario.set(producto, stockActual - 1);
        alert(`¡Has comprado ${producto}! Gracias.`);
    } else {
        
        let sugerido = productos.find(p => inventario.get(p) > 0);
        if (sugerido) {
            alert(`El producto ${producto} está agotado. Te sugerimos ${sugerido}.`);
        } else {
            alert("Todos los productos están agotados. Lo sentimos.");
        }
    }
};

while (true) {
    let opcion = prompt("Máquina Expendedora\n1. Ver inventario\n2. Comprar producto\n3. Salir\nElige una opción:");

    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        let codigo = parseInt(prompt("Ingresa el código del producto (1-5):"));
        comprarProducto(codigo);
    } else if (opcion === "3") {
        alert("¡Gracias por usar la máquina expendedora!");
        break;
    } else {
        alert("Opción inválida.");
    }
}