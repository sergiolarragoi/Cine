var opcion = "";

$(document).ready(function () {
    $('#zonaPelicula').hide();
    $('#zonaActor').hide();
    $('#zonaDirector').hide();
    esconder();
    // GESTION DE PELICULAS
    $('#nuevaPelicula').click(function () {
        esconder();
        $('#zonaPelicula').show();
        opcion = "guardarNuevaPelicula";
        $('.valores').attr("disabled", false);
//        $("#ListaDisponibles").html("");
//        $("#ListaEscogidos").html("");
//        $.ajax({
//        type: 'POST',
//        dstaType: 'json',
//        url: "../controlador/controlador_consulta_moduloak.php",
//        success: function (datos) {
//            alert(datos);
//            var datosRecibidos=JSON.parse(datos);
//            alert(datosRecibidos);
//            var miLista="";
//            $.each(datosRecibidos,function(i,linea){
//                miLista+="<li value='"+linea.id_modulo+"' data_nombre='"+linea.Nombre+"' data_curso='"+linea.Curso+"'><a href='#'>"+linea.Nombre+"</a></li>";
//            });
//            $("#ListaDisponibles").append(miLista);
//        },
//        error: function (xhr) {
//            alert("An error occured: " + xhr.status + " " + xhr.statusText);
//        }
//    });
        return false;
    });
    $('#modificarPelicula').click(function () {
        esconder();
        $('#zonaIkasle').show();
        $('#ikasleNombresTodos').show();
        $('.valores').attr("disabled", false);
        CargarComboIkasleak();
        opcion = "ikasleGuardarAldatu";
        return false;
    });
    $('#borrarPelicula').click(function () {
        esconder();
        //$('.valores').val("");
        //$('#zonaPelicula').show();
        //$('.valores').hide();
        $('#peliculaNombresTodos').show();
        $('#peliculaGuardar').show();
        $('#peliculaCancelar').show();
      //  $('.valores').attr("disabled", true);
        CargarComboPeliculas();
        opcion = "guardarPeliculaBorrar";
        return false;
    });
    $('#buscarPelicula').click(function () {
        esconder();
        $('#zonaIkasle').show();
        CargarComboIkasleak();
        opcion = "ikasleGuardarBilatu";
        $('#ikasleNombresTodos').show();
        $('.valores').attr("disabled", true);
        alert('ikasle bilatu');
        return false;
    });
    $('#peliculaGuardar').click(function () {
        switch (opcion) {
            case "guardarNuevaPelicula":
                funcionNuevaPelicula();
                break;
            case "ikasleGuardarAldatu":
                funcionIkasleAldatu();
                break;
            case "guardarPeliculaBorrar":
                funcionBorrarPelicula();
                break;
            case "ikasleGuardarBilatu":
                funcionIkasleBilatu();
                break;
        }
    });
//    $('#ListaDisponibles').on("click","li",function () {
//       moduloId=$(this).val();
//       moduloCurso=$(this).attr("data_curso");
//       moduloNombre=$(this).attr("data_nombre");
//      // alert(moduloId+moduloCurso+moduloNombre);
//       $(this).remove();
//       
//        miLista="<li value='"+moduloId+"' data_nombre='"+moduloNombre+"' data_curso='"+moduloCurso+"'><a href='#'>"+moduloNombre+"</a></li>";
//            
//            $("#ListaEscogidos").append(miLista);
//       
//    });
//     $('#ListaEscogidos').on("click","li",function () {
//       moduloId=$(this).val();
//       moduloCurso=$(this).attr("data_curso");
//       moduloNombre=$(this).attr("data_nombre");
//      // alert(moduloId+moduloCurso+moduloNombre);
//       $(this).remove();
//       
//        miLista="<li value='"+moduloId+"' data_nombre='"+moduloNombre+"' data_curso='"+moduloCurso+"'><a href='#'>"+moduloNombre+"</a></li>";
//            
//            $("#ListaDisponibles").append(miLista);
//       
//    });
//
//    $('#ikasleNombresTodos').change(function () {
//
//        MiId = $('#ikasleNombresTodos').val();
//        MiNombre = $('#ikasleNombresTodos option:selected').html();
//        MiEdad = $('#ikasleNombresTodos option:selected').attr('data-edad');
//        MiCurso = $('#ikasleNombresTodos option:selected').attr('data-curso');
//        $('#ikasleId').val(MiId);
//        $('#ikasleNombre').val(MiNombre);
//        $('#ikasleEdad').val(MiEdad);
//        $('#ikasleCurso').val(MiCurso);
//    });
    
    //MODULUEN GESTIOA
    $('#moduloBerria').click(function () {
        esconder();
        $('#zonaModulo').show();
        opcion = "AltasBerriaModulo";
        alert('moduloberria');
        return false;
    });
    $('#moduloAldatu').click(function () {
        esconder();
        $('#zonaModulo').show();
        opcion = "AldatuModulo";
        alert('moduloaldatu');
        return false;
    });
    $('#moduloKendu').click(function () {
        esconder();
        $('#zonaModulo').show();
        $('#moduloNombresTodos').show();
        $('.valoresm').val("");
        $('.valoresm').attr("disabled", true);
        cargarComboModuluak();
        opcion = "BorrarModulo";
        alert('modulokendu');
        return false;
    });
    $('#moduloBilatu').click(function () {
        esconder();
        $('#zonaModulo').show();
        opcion = "BuscarModulo";
        alert('modulobilatu');

        return false;
    });
    $("#moduloGuardar").click(function () {
        esconder();
        $('#zonaModulo').show();
        switch (opcion) {
            case "AltasBerriaModulo":
                alert("alta");
                funcionModuloBerria();
                break;
            case "AldatuModulo":
                alert("aldatu");
                funcionAldatuModuloa();
                break;
            case "BorrarModulo":
                alert("ezabatu");
                funcionBorrarModulo();
                break;
            case "BuscarModulo":
                alert("bilatu");
                funcionBuscarModulo();
                break;
        }
        alert('moduloberria');
        return false;

    });
    

    
    // GESTION DE CONSULTAS
    $('#kontsultaIkasleak').click(function () {
        esconder();
        $('#zonaConsulta').show();
        alert('kontsulta ikasleak');
        funcionKontsultaIkasleak();
        return false;
    });
    $('#kontsultaModuluak').click(function () {
        esconder();
        $('#zonaConsulta').show();
        alert('kontsulta moduluak');

        return false;
    });
    $('#kontsultaIkasleModulo').click(function () {
        esconder();
        $('#zonaConsulta').show();
        alert('kontsulta moduluak ikasleak');

        return false;
    });



});