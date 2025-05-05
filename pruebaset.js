let inventario = new Set([
    { nombre: "Galletas", stock: 3 },
    { nombre: "Papas", stock: 2 },
    { nombre: "Chocolate", stock: 1 },
    { nombre: "Gaseosa", stock: 0 },
    { nombre: "Chicle", stock: 4 }
]);

const inventarioArray = () => Array.from(inventario);


const mostrarInventario = () => {
    let mensaje = "Inventario:\n";
    inventarioArray().forEach((item, index) => {
        mensaje += `${index + 1}. ${item.nombre} - Stock: ${item.stock}\n`;
    });
    alert(mensaje);
};

const comprarProducto = (codigo) => {
    let items = inventarioArray();

    if (codigo < 1 || codigo > items.length) {
        alert(`Código inválido. Usa un número del 1 al ${items.length}.`);
        return;
    }

    let item = items[codigo - 1];

    if (item.stock > 0) {

        inventario.delete(item);
        item.stock--;
        inventario.add(item);
        alert(`¡Has comprado ${item.nombre}! Gracias.`);
    } else {
        let sugerido = items.find(i => i.stock > 0);
        if (sugerido) {
            alert(`El producto ${item.nombre} está agotado. Te sugerimos ${sugerido.nombre}.`);
        } else {
            alert("Todos los productos están agotados. Lo sentimos.");
        }
    }
};

while (true) {
    let opcion = prompt(`Máquina Expendedora\n1. Ver inventario\n2. Comprar producto\n3. Salir\nElige una opción:`);

    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        let codigo = parseInt(prompt(`Ingresa el código del producto (1-${inventario.size}):`));
        comprarProducto(codigo);
    } else if (opcion === "3") {
        alert("¡Gracias por usar la máquina expendedora!");
        break;
    } else {
        alert("Opción inválida.");
    }
}