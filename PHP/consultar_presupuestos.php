<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db.php';

$sql = "SELECT * FROM presupuestos ORDER BY id DESC";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    echo "<table border='1' cellpadding='8'>";
    echo "<thead><tr><th>ID</th><th>Personal</th><th>Número</th><th>Valor</th></tr></thead><tbody>";
    while ($fila = $resultado->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $fila["id"] . "</td>";
        echo "<td>" . $fila["personal"] . "</td>";
        echo "<td>" . $fila["numero"] . "</td>";
        echo "<td>$" . number_format($fila["valor"], 2) . "</td>";
        echo "</tr>";
    }
    echo "</tbody></table>";
} else {
    echo "No hay registros aún.";
}

$conexion->close();
?>
