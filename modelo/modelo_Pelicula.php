<?php

require_once '../controlador/conector.php';

class modelo_pelicula {

    private $link;
    private $usuario;

    public function __construct() {
        $this->link = Conectar::conexion();
        $this->usuario = array();
    }

    public function get_peliculas() {
        $sql = "CALL sp_mostrarPeliculas()";
        $consulta = $this->link->query($sql);
        while ($row = mysqli_fetch_array($consulta, MYSQLI_ASSOC)) {
            $this->usuario[] = $row;
        }
        $consulta->free_result();
        $this->link->close();
        return $this->usuario;
    }
//    public function get_moduloak() {
//        $sql = "CALL sp_mostrar_moduloak()";
//        $consulta = $this->link->query($sql);
//        while ($row = mysqli_fetch_array($consulta, MYSQLI_ASSOC)) {
//            $this->usuario[] = $row;
//        }
//        $consulta->free_result();
//        $this->link->close();
//        return $this->usuario;
//    }

    public function insertar_pelicula($titulo, $edad, $director, $cartel) {
        $consulta = $this->link->query("CALL sp_insertarNuevaPelicula('$titulo', '$edad', '$director', '$cartel')");
    }

    public function borrar_pelicula($pelicula_id) {
        $consulta = $this->link->query("CALL sp_borrarPelicula('$pelicula_id')");
    }
//
//    public function insertar_moduloak($nombre, $curso) {
//        $consulta = $this->link->query("CALL sp_insertar_moduloak('$nombre','$curso')");
//    }
//    public function modificar_moduloak($id,$nombre,$curso){
//        $consulta = $this->link->query("CALL sp_modificar_moduloak('$id','$nombre','$curso')");
//    }
//     public function borrar_modulo($ikasle_id) {
//        $consulta = $this->link->query("CALL sp_borrar_modulo('$ikasle_id')");
//    }

//public function modificar_ikasle($id,$nombre,$edad,$curso){
//     $consulta=$this->link->query("CALL sp_modificar_ikasle('$id'. '$nombre', '$edad', '$curso')");
//} 
}
