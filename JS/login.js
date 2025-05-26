// Selecciona el primer formulario que encuentre en el documento
document.querySelector("form").addEventListener("submit", function(e) {
  
  // Obtiene el valor del campo "usuario" y elimina espacios al inicio y final
  const usuario = document.getElementById("usuario").value.trim();

  // Obtiene el valor del campo "contraseña" y elimina espacios al inicio y final
  const contraseña = document.getElementById("contraseña").value.trim();

  // Verifica si alguno de los campos está vacío
  if (!usuario || !contraseña) {
    // Muestra una alerta indicando que los campos deben completarse
    alert("Por favor completa todos los campos.");

    // Previene el envío del formulario si hay campos vacíos
    e.preventDefault();
  }
});

  