<?php

require_once '../modelo/modelo_Ikasle.php';
$id = htmlspecialchars(trim($_POST['id']));
$nombre = htmlspecialchars(trim($_POST['Nombre']));
$curso = htmlspecialchars(trim($_POST['Curso']));
$cont = new modelo_ikasle();
$cont->modificar_moduloak($id, $nombre, $curso);
print($nombre);
