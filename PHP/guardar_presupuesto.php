<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $personal = $_POST['personal'];
    $numero = $_POST['numero'];
    $valor = $_POST['valor'];

    if (!empty($personal) && !empty($numero) && is_numeric($valor)) {
        $stmt = $conexion->prepare("INSERT INTO presupuestos (personal, numero, valor) VALUES (?, ?, ?)");
        $stmt->bind_param("ssd", $personal, $numero, $valor);
        $stmt->execute();

        echo "✅ Presupuesto guardado correctamente.";
    } else {
        echo "❌ Verifica que todos los campos estén completos y el valor sea numérico.";
    }

    $conexion->close();
}
?>
