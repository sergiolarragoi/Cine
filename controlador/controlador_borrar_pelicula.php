<?php

require_once '../modelo/modelo_Pelicula.php';
$pelicula_id = $_POST['data']; 
 
$cont = new modelo_pelicula();
$cont->borrar_pelicula($pelicula_id);
print($pelicula_id);
