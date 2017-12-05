<?php

require_once("../modelo/modelo_director.php");
$cont = new modelo_director();
$datos = $cont->directores_peliculas();

$director = json_encode($datos);
print $director;
