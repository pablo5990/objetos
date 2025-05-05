// Arreglos iniciales
let productos = ["Galletas", "Papas", "Chocolate", "Gaseosa", "Chicle"];
let stock = [3, 2, 1, 0, 4]; 

const mostrarInventario = () => {
    let mensaje = "Inventario:\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i]} - Stock: ${stock[i]}\n`;
    }
    alert(mensaje);
};

const comprarProducto = (codigo) => {
    if (codigo < 1 || codigo > 5) {
        alert("Código inválido. Usa un número del 1 al 5.");
        return;
    }

    let index = codigo - 1;
    if (stock[index] > 0) {
        stock[index]--;
        alert(`¡Has comprado ${productos[index]}! Gracias.`);
    } else {
        let sugerido = -1;
        for (let i = 0; i < stock.length; i++) {
            if (stock[i] > 0) {
                sugerido = i;
                break;
            }
        }
        if (sugerido !== -1) {
            alert(`El producto ${productos[index]} está agotado. Te sugerimos ${productos[sugerido]}.`);
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