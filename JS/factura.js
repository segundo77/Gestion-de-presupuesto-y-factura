function ocultarTodo() {
    document.getElementById('formulario-factura').style.display = 'none';
    document.getElementById('listado-facturas').style.display = 'none';
    document.getElementById('modificar-factura').style.display = 'none';
    document.getElementById('eliminar-factura').style.display = 'none';
  }
  
  function mostrarFormulario() {
    ocultarTodo();
    document.getElementById('formulario-factura').style.display = 'block';
  }
  
  function mostrarListado() {
    ocultarTodo();
    document.getElementById('listado-facturas').style.display = 'block';
  }
  
  function mostrarModificar() {
    ocultarTodo();
    document.getElementById('modificar-factura').style.display = 'block';
  }
  
  function mostrarEliminar() {
    ocultarTodo();
    document.getElementById('eliminar-factura').style.display = 'block';
  }
  