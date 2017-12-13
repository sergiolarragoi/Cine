var opcion = "";

$(document).ready(function () {
    $('#zonaPelicula').hide();
    $('#zonaActor').hide();
    $('#zonaDirector').hide();
    esconder();
    
    // GESTION DE PELICULAS
    
    $('#listaPelicula').click(function(){
        esconder();
        $('#zonaConsulta').show();
        ListarPeliculas();
        return false;
    });
    $('#nuevaPelicula').click(function () {
        esconder();
        $('#zonaConsulta').show();
        $('#zonaPelicula').show();
        $('#peliculaTitulo').show();
        $('#director').hide();
        $('#cartel').show();
        $('#peliculaNombresTodos').show();
        $('.valores').attr("disabled", false);
        CargarComboDirectores();
        CargarTablaActores();
        opcion = "guardarPeliculaNueva";
        return false;
    });
    $('#modificarPelicula').click(function () {
        esconder();
        $('#zonaPelicula').show();
        $('#peliculaTitulo').show();
        $('#director').hide();
        $('#cartel').hide();
        $('#peliculaNombresTodos').show();
        $('.valores').attr("disabled", false);
        ComboDirectoresPeliculas();
        opcion = "guardarPeliculaModificar";
        return false;
    });
    $('#borrarPelicula').click(function () {
        esconder();
        $('.valores').val("");
        $('#zonaPelicula').show();
        $('#peliculaTitulo').hide();
        $('#peliculaNombresTodos').show();
        $('.valores').attr("disabled", true);
        CargarComboPeliculas();
        opcion = "guardarPeliculaBorrar";
        return false;
    });
    $('#peliculaGuardar').click(function () {
        switch (opcion) {
            case "guardarPeliculaNueva":
                funcionNuevaPelicula();
                break;
            case "guardarPeliculaModificar":
                funcionModificarPelicula();
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
    $('#peliculaNombresTodos').change(function () {

        MiTitulo = $('#peliculaNombresTodos option:selected').attr('data-titulo');
        MiAnio = $('#peliculaNombresTodos option:selected').attr('data-anio');
        $('#peliculaTitulo').val(MiTitulo);
        $('#edadPelicula').val(MiAnio);
    });
    
    //MODULUEN GESTIOA
//    $('#moduloBerria').click(function () {
//        esconder();
//        $('#zonaModulo').show();
//        opcion = "AltasBerriaModulo";
//        alert('moduloberria');
//        return false;
//    });
//    $('#moduloAldatu').click(function () {
//        esconder();
//        $('#zonaModulo').show();
//        opcion = "AldatuModulo";
//        alert('moduloaldatu');
//        return false;
//    });
//    $('#moduloKendu').click(function () {
//        esconder();
//        $('#zonaModulo').show();
//        $('#moduloNombresTodos').show();
//        $('.valoresm').val("");
//        $('.valoresm').attr("disabled", true);
//        cargarComboModuluak();
//        opcion = "BorrarModulo";
//        alert('modulokendu');
//        return false;
//    });
//    $('#moduloBilatu').click(function () {
//        esconder();
//        $('#zonaModulo').show();
//        opcion = "BuscarModulo";
//        alert('modulobilatu');
//
//        return false;
//    });
//    $("#moduloGuardar").click(function () {
//        esconder();
//        $('#zonaModulo').show();
//        switch (opcion) {
//            case "AltasBerriaModulo":
//                alert("alta");
//                funcionModuloBerria();
//                break;
//            case "AldatuModulo":
//                alert("aldatu");
//                funcionAldatuModuloa();
//                break;
//            case "BorrarModulo":
//                alert("ezabatu");
//                funcionBorrarModulo();
//                break;
//            case "BuscarModulo":
//                alert("bilatu");
//                funcionBuscarModulo();
//                break;
//        }
//        alert('moduloberria');
//        return false;
//
//    });
//    
//
//    
//    // GESTION DE CONSULTAS
//    $('#kontsultaIkasleak').click(function () {
//        esconder();
//        $('#zonaConsulta').show();
//        alert('kontsulta ikasleak');
//        funcionKontsultaIkasleak();
//        return false;
//    });
//    $('#kontsultaModuluak').click(function () {
//        esconder();
//        $('#zonaConsulta').show();
//        alert('kontsulta moduluak');
//
//        return false;
//    });
//    $('#kontsultaIkasleModulo').click(function () {
//        esconder();
//        $('#zonaConsulta').show();
//        alert('kontsulta moduluak ikasleak');
//
//        return false;
//    });
//
//

});