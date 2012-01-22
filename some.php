<?php
//var_dump(json_decode($_POST['name']));exit();
foreach (json_decode($_POST['name']) as $nota) {
  var_dump($nota);

  // TODO: Hacer la conexion a la base de datos y luego el insert
  echo "nota";
}
?>