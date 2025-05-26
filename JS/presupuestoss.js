// Variable global que guarda la posición de la fila a modificar
let idModificar = null;

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("presupuestoForm");

  // Evento de envío del formulario (Registrar)
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const personal = document.getElementById("personal").value;
    const nombre = document.getElementById("nombre").value;
    const valor = document.getElementById("valor").value;

    if (!personal || !nombre || !valor) {
      alert("Todos los campos son obligatorios para registrar.");
      return;
    }

    // Insertar una nueva fila con los datos ingresados
    agregarFilaTabla({
      id: generarID(),
      archivo: `${nombre.toLowerCase()}.pdf`,
      usuario: nombre
    });

    alert(`Presupuesto registrado para "${nombre}".`);
    form.reset();
  });
});

/**
 * Función: modificar()
 * Pide al usuario el ID de la fila a modificar.
 * Si existe, carga los datos en el formulario para edición.
 */
function modificar() {
  const idBuscado = prompt("Ingrese el ID del presupuesto que desea modificar:");

  if (!idBuscado) return;

  const tabla = document.getElementById("tablaDatos");
  let encontrado = false;

  for (let i = 0; i < tabla.rows.length; i++) {
    const fila = tabla.rows[i];
    const id = fila.cells[0].textContent;

    if (id === idBuscado) {
      idModificar = i; // Guardar índice de la fila

      // Cargar datos en el formulario
      document.getElementById("nombre").value = fila.cells[2].textContent;
      document.getElementById("valor").value = 0; // Puedes agregar lógica real si usas back-end
      document.getElementById("personal").value = ""; // Mismo caso

      // Mostrar botón para guardar cambios
      document.getElementById("guardarCambiosBtn").style.display = "inline-block";

      alert(`Presupuesto con ID ${id} encontrado. Modifique los campos y haga clic en "Guardar cambios".`);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert(`No se encontró ningún presupuesto con el ID ${idBuscado}.`);
  }
}

/**
 * Función: guardarCambios()
 * Guarda los nuevos datos ingresados en el formulario en la fila seleccionada.
 */
function guardarCambios() {
  if (idModificar === null) {
    alert("No hay ninguna fila seleccionada para modificar.");
    return;
  }

  const nuevoNombre = document.getElementById("nombre").value;
  const nuevoValor = document.getElementById("valor").value;
  const nuevoPersonal = document.getElementById("personal").value;

  if (!nuevoNombre || !nuevoValor || !nuevoPersonal) {
    alert("Complete todos los campos antes de guardar.");
    return;
  }

  const tabla = document.getElementById("tablaDatos");
  const fila = tabla.rows[idModificar];

  // Actualizar datos de la fila
  fila.cells[2].textContent = nuevoNombre;
  fila.cells[1].textContent = `actualizado_${nuevoNombre.toLowerCase()}.pdf`;

  alert("Presupuesto modificado correctamente.");

  // Reiniciar estado
  document.getElementById("presupuestoForm").reset();
  document.getElementById("guardarCambiosBtn").style.display = "none";
  idModificar = null;
}

/**
 * Función: eliminar()
 * Elimina una fila cuyo nombre coincida con el del campo "nombre".
 */
function eliminar() {
  const nombre = document.getElementById("nombre").value;
  if (!nombre) {
    alert("Ingrese el nombre del presupuesto a eliminar.");
    return;
  }

  const tabla = document.getElementById("tablaDatos");
  let eliminado = false;

  for (let i = 0; i < tabla.rows.length; i++) {
    const fila = tabla.rows[i];
    if (fila.cells[2].textContent === nombre) {
      tabla.deleteRow(i);
      eliminado = true;
      break;
    }
  }

  if (eliminado) {
    alert(`Presupuesto de "${nombre}" eliminado.`);
    document.getElementById("presupuestoForm").reset();
  } else {
    alert(`No se encontró el presupuesto de "${nombre}".`);
  }
}

/**
 * Función: consultar()
 * Carga datos simulados en la tabla.
 */
function consultar() {
  const tabla = document.getElementById("tablaDatos");
  tabla.innerHTML = ""; // Limpia la tabla

  const datos = [
    { id: "001", archivo: "presupuesto1.pdf", usuario: "Jhon Molina" },
    { id: "002", archivo: "presupuesto2.pdf", usuario: "Ana Torres" },
    { id: "003", archivo: "presupuesto3.pdf", usuario: "Luis Pérez" }
  ];

  datos.forEach(agregarFilaTabla);
}

/**
 * Agrega una fila a la tabla con los datos proporcionados.
 */
function agregarFilaTabla({ id, archivo, usuario }) {
  const tabla = document.getElementById("tablaDatos");
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${id}</td>
    <td>${archivo}</td>
    <td>${usuario}</td>
  `;

  tabla.appendChild(fila);
}

/**
 * Genera un ID aleatorio de 3 dígitos.
 */
function generarID() {
  return Math.floor(100 + Math.random() * 900).toString();
}
