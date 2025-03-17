// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.




// Lista para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
    } else if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
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

// Función para sortear el Amigo Secreto sin autoasignaciones ni repeticiones
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para realizar el sorteo.");
        return;
    }

    let shuffled = [...amigos]; // Copiar la lista de nombres
    let valido = false;

    // Asegurar que cada persona recibe y da solo una vez sin autoasignarse
    while (!valido) {
        shuffled.sort(() => Math.random() - 0.5);
        valido = amigos.every((amigo, i) => amigo !== shuffled[i]); // Verificar que nadie se asigne a sí mismo
    }

    let resultado = "";
    for (let i = 0; i < amigos.length; i++) {
        resultado += `${amigos[i]} → ${shuffled[i]}<br>`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}
