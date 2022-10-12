// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function CargarDatos()
{
    $.getJSON('/TP09json.json', function(data) {
        console.log(data);

        data.restaurantes.forEach(unrestaunte =>  {
            $("#bodyTabla").append("<tr>");
            $("#bodyTabla").append("<td><img src='/imagenes/" + unrestaunte.Logo + "'></td>"); 
            $("#bodyTabla").append("<td>" + unrestaunte.ID + "</td>"); 
            $("#bodyTabla").append("<td>" + unrestaunte.Nombre + "</td>"); 
            $("#bodyTabla").append("<td>" + unrestaunte.Apertura + "</td>"); 
            $("#bodyTabla").append("<td>" + unrestaunte.Ubicacion + "</td>"); 
            $("#bodyTabla").append("<td>" + unrestaunte.Duenios + "</td>"); 
            $("#bodyTabla").append("<tr>");
        });
        
        }
     );
}

