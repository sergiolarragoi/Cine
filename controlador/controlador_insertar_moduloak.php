<?php

require_once '../modelo/modelo_Ikasle.php';
$nombre = htmlspecialchars(trim($_POST['Nombre']));
$curso = htmlspecialchars(trim($_POST['Curso']));
$cont = new modelo_ikasle();
$cont->insertar_moduloak($nombre, $curso);
print($nombre);
