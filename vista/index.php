<html>
    <head>
        <title>GESTIÓN DE CINE</title>
        <link href="../css/estilo.css" rel="stylesheet" type="text/css"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <script src="../JS/jquery-3.2.1.js" type="text/javascript"></script>
        <script src="../JS/Funciones.js" type="text/javascript"></script>
        <script src="../JS/FuncionesDeGestion.js" type="text/javascript"></script>

    </head>
    <body>
        <div class="page">
            <div class="content">
                <h1>GESTIÓN DE CINE</h1>
                <hr/> 

                <section id="central">
                    <aside class="vertical-menu">
                        <a href="#" class="active">PELÍCULAS</a>
                        <a href="#" id="listaPelicula">Listado</a>
                        <a href="#" id="nuevaPelicula">Añadir</a>
                        <a href="#" id="modificarPelicula">Modificar</a>
                        <a href="#" id="borrarPelicula">Borrar</a>
                        <a href id="buscarPelicula">Buscar</a>
                        <a href="#" class="active">ACTORES</a>
                        <a href="#" id="listaActor">Listado</a>
                        <a href="#" id="nuevoActor">Añadir  </a>
                        <a href="#" id="modificarActor">Modificar</a>
                        <a href="#" id="borrarActor">Borrar</a>
                        <a href id="buscarActor">Buscar</a>
                        <a href="#" class="active">DIRECTORES</a>
                        <a href="#" id="listaDirector">Listado</a>
                        <a href="#" id="nuevoDirector">Añadir</a>
                        <a href="#" id="borrarDirector">Borrar</a>
                        <a href="#" id="modificarDirector">Modificar</a>



                    </aside>
                    <div class="dcha">
                        <div id="zonaPelicula">
                            <label>ID</label><input type="text" id="peliculaId" disabled/><br/>
                            <label>TITULO</label><input type="text" id="peliculaTitulo" class="valores"/>
                            <select id="peliculaNombresTodos"></select><br>
                            <label >AÑO</label><input type="text" id="edadPelicula" class="valores"/>  <br/>
                            <label >DIRECTOR</label><input type="text" id="director" class="valores"/>  <br/>
                            <label >CARTEL</label><input type="text" id="cartel" class="valores"/>  <br/>
<!--                            <table id="tabla">
                                <tr>
                                    <th>MODULOS DISPONIBLES</th>
                                    <th>MODULOS EN LOS QUE SE MATRICULA</th>  
                                </tr>
                                <tr>
                                    <td id="ListaDisponibles"></td>
                                    <td id="ListaEscogidos"></td>
                                </tr>
                            </table>-->
                            <input type="button" value="aceptar" id="peliculaGuardar"/>
                            <input type="button" value="cancelar" id="peliculaCancelar"/>
                            <br>

                        </div>
                        <div id="zonaActor">
                            <label>ID</label><input type="text" id="moduloId" class="valoresm" disabled/><br/>
                            <label>NOMBRE ACTOR</label><input type="text" id="moduloNombre" class="valoresm"/>
                            <select id="actorNombresTodos"></select><br>
                            <input type="button" value="aceptar" id="moduloGuardar"/>
                            <input type="button" value="cancelar" id="moduloCancelar"/>
                            <br>
                        </div>
                        <div id="zonaDirector">
                            <label>ID</label><input type="text" id="moduloId" class="valoresm" disabled/><br/>
                            <label>NOMBRE DIRECTOR</label><input type="text" id="moduloNombre" class="valoresm"/>
                            <select id="directorNombresTodos"></select><br>
                            <input type="button" value="aceptar" id="moduloGuardar"/>
                            <input type="button" value="cancelar" id="moduloCancelar"/>
                            <br>
                        </div>
                        <div id="zonaConsulta">

                        </div>
                    </div>
                </section>
            </div>
        </div>
    </body>
</html>