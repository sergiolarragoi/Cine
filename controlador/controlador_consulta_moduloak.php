<?php

require_once("../modelo/modelo_Ikasle.php");
$cont=new modelo_ikasle();
$datos=$cont->get_moduloak();

 $ikasleak= json_encode($datos); 
   print $ikasleak;

