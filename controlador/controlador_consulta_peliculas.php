<?php

require_once("../modelo/modelo_Pelicula.php");
$cont = new modelo_pelicula();
$datos = $cont->get_peliculas();

$peliculas = json_encode($datos);
print $peliculas;
