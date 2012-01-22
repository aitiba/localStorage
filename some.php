<?php
 mysql_connect("localhost", "root", "aitiba") or die(mysql_error()); 
 mysql_select_db("localstorage") or die(mysql_error()); 
 // TODO: Hacerlo para n notas.
 //echo "pasa";var_dump($_POST['name']);echo "pasa2";
//foreach ($_POST['name'] as $nota) {
	$nota = $_POST['name'];
	echo "dentro";
	$sql = "INSERT INTO notas (nombre, apellido, extra)
VALUES ('$nota', '', '')";
var_dump ($sql);
  	mysql_query($sql);
//}
?>