// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.




// Lista para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido."); // ✅ Muestra alerta si el campo está vacío
        return;
    }

    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
    } else {
        alert("Ese nombre ya está en la lista."); // ✅ Evita duplicados
    }

    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para seleccionar un ganador aleatorio de la lista
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para realizar el sorteo.");
        return;
    }

    let ganador = amigos[Math.floor(Math.random() * amigos.length)]; // ✅ Selecciona un amigo aleatorio

    document.getElementById("resultado").innerHTML = `<strong>El ganador es: ${ganador}</strong>`;
}

// Asignar evento al botón solo una vez
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("buttonDraw").addEventListener("click", sortearAmigo);
});
