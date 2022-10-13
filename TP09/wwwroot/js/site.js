// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function CargarDatos()
{
    $.getJSON('/TP09json.json', function(data) {
        console.log(data);

        data.restaurantes.forEach(unrestaunte =>  {
            $("#datos").append("<tr>");
            $("#datos").append("<td><img class='tamanoimagenes' src='/imagenes/" + unrestaunte.Logo + "'></td>"); 
            $("#datos").append("<td>" + unrestaunte.ID + "</td>"); 
            $("#datos").append("<td>" + unrestaunte.Nombre + "</td>"); 
            $("#datos").append("<td>" + unrestaunte.Apertura + "</td>"); 
            $("#datos").append("<td>" + unrestaunte.Ubicacion + "</td>"); 
            $("#datos").append("<td>" + unrestaunte.Duenios + "</td>");
            $("#datos").append("<td>" + unrestaunte.MenuPrincipal.PrimerPlato + "</td>");
            $("#datos").append("<td>" + unrestaunte.MenuPrincipal.PlatoPrincipal + "</td>");
            $("#datos").append("<td>" + unrestaunte.MenuPrincipal.Postre + "</td>");
            $("#datos").append("<td>" + unrestaunte.MenuPrincipal.Precio + "</td>");
            $("#datos").append('<td> <button onclick="VerResenas('+unrestaunte.ID+')"> Ver Reseñas </button> </td>');  
            $("#datos").append("</tr>");
        });
        
        }
     );
     $('#boton').hide();
}

function VerResenas(id)
{
    $.getJSON('/TP09json.json', function(data1) 
    {
        console.log(data1);

    if(unrestaunte.ID==id)
    {
    data1.restaurantes.forEach(unrestaunte1 => {
    $("#datos1").append("<tr>");
    $("#datos1").append("<td>" + unrestaunte1.NombreUsuario + "</td>"); 
    $("#datos1").append("<td>" + unrestaunte1.Valoracion + "</td>"); 
    $("#datos1").append("<td>" + unrestaunte1.Descripcion + "</td>"); 
    $("#datos1").append("<td>" + unrestaunte1.CantLikes + "</td>"); 
    $("#datos1").append("</tr>");
    });
    } 
    }
    
    ); 
}
