// Contador para los IDs
let id_usuarios = 1;

// Función para generar un ID con ceros a la izquierda, ej: "0001"
function generarID() {
    id = String(id_usuarios++).padStart(4, '0');
    return id;
}

// Esta función agrega un nuevo usuario cuando se hace clic en "Agregar"
function agregarUsuario() {
    const id = generarID(); // genera ID nuevo
    const nombre = document.getElementById("Nombre").value.trim();
    const rol = document.getElementById("Rol").value.trim();
    const correo = document.getElementById("Correo").value.trim();
    const contrasena = document.getElementById("Contrasena").value.trim();

    const tabla = document.getElementById("tabla-usuarios").getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow(); // agrega fila nueva

    // Iconos de acciones (editar y eliminar)
    const celdaAcciones = nuevaFila.insertCell(0);
    const icono = document.createElement('i');
    icono.className = "fas fa-trash botonAcciones";
    icono.title = "Eliminar";
    icono.id = "eliminar";

    // Icono para eliminar un usuario
    icono.onclick = function () {
        const confirmar = confirm("¿Estás seguro de que deseas eliminar este registro?");
        if (confirmar) {
            tabla.deleteRow(nuevaFila.rowIndex - 1); // lo borra del HTML
        }
    };

    const icono2 = document.createElement('i');
    icono2.className = "fas fa-pen botonAcciones";
    icono2.title = "Editar";
    icono2.id = "editar";

    // Estilos para la celda que contiene los botones de accion
    celdaAcciones.style.display = "flex";
    celdaAcciones.style.gap = "10px";
    celdaAcciones.style.justifyContent = "center";
    celdaAcciones.appendChild(icono2);
    celdaAcciones.appendChild(icono);

    // Se insertan los datos del usuario en la fila de la tabla
    nuevaFila.insertCell(1).textContent = id;
    nuevaFila.insertCell(2).textContent = nombre;
    nuevaFila.insertCell(3).textContent = rol;
    nuevaFila.insertCell(4).textContent = correo;
    nuevaFila.insertCell(5).textContent = contrasena;

    // Limpia los inputs para que se pueda agregar un nuevo usuario
    document.getElementById("Nombre").value = "";
    document.getElementById("Rol").value = "";
    document.getElementById("Correo").value = "";
    document.getElementById("Contrasena").value = "";
}

// Cuando cambia el filtro de rol, se ejecutara
document.getElementById("filtrar-rol").addEventListener("change", filtrarPorRol);

function filtrarPorRol() {
    const filtro = document.getElementById("filtrar-rol").value;
    const filas = document.getElementById("tabla-usuarios").getElementsByTagName("tbody")[0].rows;

    // Recorre todas las filas para mostrar solo las que coincidan con el rol
    for (let i = 0; i < filas.length; i++) {
        const rol = filas[i].cells[3].textContent;

        if (filtro === "" || rol === filtro) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}
