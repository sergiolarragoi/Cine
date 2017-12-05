<?php

require_once '../modelo/modelo_Pelicula.php';
//$id = htmlspecialchars(trim($_POST['Id']));
$titulo = htmlspecialchars(trim($_POST['Titulo']));
$edad = htmlspecialchars(trim($_POST['Edad']));
$director = htmlspecialchars(trim($_POST['Director']));
$cont = new modelo_pelicula();
$cont->modificar_pelicula($titulo, $edad, $director);
print($titulo);
