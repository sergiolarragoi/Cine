<?php
class Conectar{
    public static function conexion(){
        $localhost = 'localhost';
        $usuario = 'root';
        $contrasena = '';
        $bbdd = 'cine';
        
        $link = mysqli_connect($localhost, $usuario, $contrasena, $bbdd);
        $link->query("SET NAMES 'utf8'");
        return $link;
    }
}
