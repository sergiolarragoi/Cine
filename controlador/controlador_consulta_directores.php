<?php

require_once("../modelo/modelo_Pelicula.php");
$cont = new modelo_director();
$datos = $cont->get_director();

$director = json_encode($datos);
print $director;
