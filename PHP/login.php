<?php
// Obtiene el valor enviado desde el formulario a través del método POST para "usuario".
// Si no se recibe ningún valor, se usa "admin" como valor por defecto.
$usuario = $_POST['usuario'] ?? 'admin';

// Lo mismo para la contraseña, usa '1234' como valor por defecto si no se recibe nada.
$contraseña = $_POST['contrasena'] ?? '1234';

// Aquí debería ir la verificación real contra una base de datos.
// Actualmente, se compara con valores fijos ("admin" y "1234").
if ($usuario === 'admin' && $contraseña === '1234') {
    // Si las credenciales son correctas, muestra un mensaje de bienvenida.
    echo "Inicio de sesión exitoso. ¡Bienvenido, $usuario!";
} else {
    // Si las credenciales no coinciden, muestra un mensaje de error.
    echo "Credenciales incorrectas. Intenta de nuevo.";
}
?>

