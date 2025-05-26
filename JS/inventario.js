function ocultarTodos() {
    document.getElementById('formulario-inventario').style.display = 'none';
    document.getElementById('listado-inventarios').style.display = 'none';
    document.getElementById('modificar-inventario').style.display = 'none';
    document.getElementById('eliminar-inventario').style.display = 'none';
}

function mostrarFormulario(tipo) {
    ocultarTodos();
    if (tipo === 'registrar') {
        document.getElementById('formulario-inventario').style.display = 'block';
    } else if (tipo === 'modificar') {
        document.getElementById('modificar-inventario').style.display = 'block';
    } else if (tipo === 'eliminar') {
        document.getElementById('eliminar-inventario').style.display = 'block';
    }
}

function mostrarListado() {
    ocultarTodos();
    document.getElementById('listado-inventarios').style.display = 'block';
}
