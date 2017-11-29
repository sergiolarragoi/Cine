//funciones generales
function esconder() {
   $('#zonaPelicula').hide();
    $('#zonaActor').hide();
    $('#zonaDirector').hide();
    $('#zonaConsulta').hide();
    $('#peliculaNombresTodos').hide();
    $('#actorNombresTodos').hide();
    $('#directorNombresTodos').hide();
}
//funciones de gestion de ikasleak     

function funcionNuevaPelicula() {
    
   // MiId = $('#peliculaId').val();
    MiTitulo = $('#peliculaTitulo').val();
    MiEdad = $('#edadPelicula').val();
    MiDirector = $('#director').val();
    MiCartel = $('#cartel').val();
    alert(MiTitulo+MiEdad+MiDirector+MiCartel);
   // alert($("#ListaEscogidos").html());
    $.ajax({
        type: 'POST',
        data: "submit=&Titulo=" + MiTitulo + "&Edad=" + MiEdad + "&Director=" + MiDirector + "&Cartel=" + MiCartel,
        dstaType: 'json',
        url: "../controlador/controlador_insertar_pelicula.php",
        success: function (datos) {
            alert("Se ha insertado con exito");
            alert(datos);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
    esconder();


}

function funcionIkasleAldatu() {
    MiId = $('#ikasleId').val();
    MiNombre = $('#ikasleNombre').val();
    MiEdad = $('#ikasleEdad').val();
    MiCurso = $('#ikasleCurso').val();
    $.ajax({
        type: 'POST',
        data: "submit=&id=" + MiId + "&Nombre=" + MiNombre + "&Edad=" + MiEdad + "&Curso=" + MiCurso,
        dstaType: 'json',
        url: "../controlador/controlador_insertar_ikasle.php",
        success: function (datos) {
            alert("Se ha insertado con exito");
            alert(datos);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
    esconder();
}

function funcionBorrarPelicula() {

    $('#peliculaNombresTodos').show();
    MiId = $('#peliculaNombresTodos').val();
    confirmar = confirm("¿Desea borrar el registro? ");
    if (!confirmar) {
        return false;
    }
    $.ajax({
        type: 'POST',
        data: {data: MiId},
        dstaType: 'json',
        url: "../controlador/controlador_borrar_pelicula.php",
        success: function (datos) {
            alert("Se ha eliminado con exito");

        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
    $('.valores').attr("disabled", false);
    esconder();
}

function funcionIkasleBilatu() {}

function CargarComboPeliculas() {
    $('#peliculasNombresTodos').html("");
    $.ajax({
        type: 'POST',
        dstaType: 'json',
        url: "../controlador/controlador_consulta_peliculas.php",
        success: function (datos) {
            alert(datos);
            midato = JSON.parse(datos);
            micombo = "";
            $.each(midato, function (i, dato) {
                micombo += "<option value='" + dato.IdPelicula + "' data-titulo='" + dato.Titulo + "'>" + dato.IdPelicula +".- "+ dato.Titulo +"</option>";
            });
            alert(micombo);
            $('#peliculaNombresTodos').append(micombo);
            return false;
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
}

// Funciones de gestión de módulos

function funcionModuloBerria() {
    MiModulo = $('#moduloNombre').val();
    MiCurso = $('#moduloCurso').val();
    $.ajax({
        type: 'POST',
        data: "submit=&Nombre=" + MiModulo + "&Curso=" + MiCurso,
        dstaType: 'json',
        url: "../controlador/controlador_insertar_moduloak.php",
        success: function (datos) {
            alert("Se ha insertado con exito");
            alert(datos);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
    esconder();
}
function funcionAldatuModuloa() {
    MiId = $('#moduloId').val();
    MiNombre = $('#moduloNombre').val();
    MiCurso = $('#moduloCurso').val();
    $.ajax({
        type: 'POST',
        data: "submit=&id=" + MiId + "&Nombre=" + MiNombre + "&Curso=" + MiCurso,
        dstaType: 'json',
        url: "../controlador/controlador_insertar_ikasle.php",
        success: function (datos) {
            alert("Se ha insertado con exito");
            alert(datos);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
    esconder();
}
function funcionBorrarModulo() {
    $('#moduloNombresTodos').show();
    MiId = $('#moduloNombresTodos').val();
    confirmar = confirm("Seguro que desea borrar el registro? ");
    if (!confirmar) {
        return false;
    }
    $.ajax({
        type: 'POST',
        data: {data: MiId},
        dstaType: 'json',
        url: "../controlador/controlador_borrar_modulo.php",
        success: function (datos) {
            alert("Se ha eliminado con exito");

        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
    $('.valores').attr("disabled", false);
    esconder();
}
function funcionBuscarModulo() {

}
function cargarComboModuluak() {
    alert("hola");
    $('#moduloNombresTodos').html("");
    $.ajax({
        type: 'POST',
        dstaType: 'json',
        url: "../controlador/controlador_consulta_moduloak.php",
        success: function (datos) {
            alert(datos);
            midato = JSON.parse(datos);
            micombo = "";
            $.each(midato, function (i, dato) {
                micombo += "<option value='" + dato.id_modulo + "' data-Nombre='" + dato.Nombre + "' data-curso='" + dato.Curso + "'>" + dato.Nombre + " </option>";
            });
            alert(micombo);
            $('#moduloNombresTodos').append(micombo);
            return false;
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
}

//funciones consultas

function funcionKontsultaIkasleak() {
    $('#zonaConsulta').html(' ');
    $.ajax({
        type: 'POST',
        dstaType: 'json',
        url: "../controlador/controlador_consulta_ikasleak.php",
        success: function (datos) {
            alert(datos);
            var tabla = "<table>";
            tabla += "<th class='id'>Registro</th>\n\
               <th class='nombre'>Nombre</th><th class='nombre'>Edad</th>\n\
               <th class='numerico'>Curso</th><th class='nombre'>Opciones</th>";
            midato = JSON.parse(datos);

            $.each(midato, function (i, dato) {
                tabla += "<tr>";
                tabla += "<td class='id'>" + dato.id + "</td>";
                tabla += "<td class='numerico'>" + dato.Nombre + "</td>";
                tabla += "<td class='numerico'>" + dato.Edad + "</td>";
                tabla += "<td class='numerico'>" + dato.Curso + "</td>";
                tabla += "<td class='nombre'><input type='button' value='editar' class='editar' data-id='" + dato.id + "'>";
                tabla += "<input type='button' value='borrar' class='borrar' data-id='" + dato.id + "'></td>";
                tabla += "</tr>";
            });
            tabla += "</table>";
            alert(tabla);
            $('#zonaConsulta').append(tabla).hide().fadeIn('slow');
            return false;
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
}