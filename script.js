/**
 * Created by Márcio Lucas on 06/09/2016.
 */
$(document).ready(function(){
    $('.parallax').parallax();
});

function jQueryGet() {
    var vCampo = $('#campo').val();

    $.get("https://api.spotify.com/v1/search?q=" + vCampo + "&type=album", function (data) {


        var obj = data;
        var totalItems = obj.albums.items.length;
        console.log(obj);
        var html = "";


        for (var i = 0; i < totalItems; i++) {

            html += "<li class='collection-item' style='height: 320px; !important;'>\n" +
                "<div class='row'>\n" +
                "<div class='col s3'>\n" +
                "<img src='" + obj.albums.items[i].images[1].url + "'" +
                " height='" + obj.albums.items[i].images[1].height + "'" +
                "width='" + obj.albums.items[i].images[1].width + "'\n>" +
                "</div>" +
                "<div class='col s8'\n>" +
                "<a href='" + obj.albums.items[i].external_urls.spotify + "' class='green-text text-darken-1'><h4>" + obj.albums.items[i].name + "</h4></a>\n" +
                "<h5>" + obj.albums.items[i].album_type + "</h5>\n" +
                "</div>\n" +
                "</div>\n" +
                "</li>\n";
        }
        document.getElementById("listaAlbums").innerHTML = html;
    });

}


// function ajaxGet() {
//     var vCampo = document.getElementById("a");
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var json = this.responseText;
//             var obj = JSON.parse(json);
//             var totalItems = obj.albums.items.length;
//             var html = "";
//
//
//             for (var i = 0; i < totalItems; i++) {
//
//                 html += "<li class='list-group-item' style='height: 320px; !important;'>\n" +
//                     "<div class='col-md-12'>\n" +
//                     "<div class='col-md-4'>\n" +
//                     "<img src='" + obj.albums.items[i].images[1].url + "'" +
//                     " height='" + obj.albums.items[i].images[1].height + "'" +
//                     "width='" + obj.albums.items[i].images[1].width + "'\n>" +
//                     "</div>" +
//                     "<div class='col-md-8'\n>" +
//                     "<a href='"+obj.albums.items[i].external_urls.spotify+"'><h3>"+ obj.albums.items[i].name + "</h3></a>\n" +
//                     "<h4>"+ obj.albums.items[i].album_type + "</h4>\n" +
//                     "</div>\n" +
//                     "</div>\n" +
//                     "</li>\n";
//             }
//             document.getElementById("listaAlbums").innerHTML = html;
//         }
//         if (totalItems == 0) {
//             document.getElementById("listaAlbums").innerHTML = "Não encontramos o album especificado :<";
//         }
//     };
//     xhttp.open("GET", "https://api.spotify.com/v1/search?q=" + vCampo.value + "&type=album", true);
//     xhttp.send();
// }
//
// function ajaxPost() {
//
// }