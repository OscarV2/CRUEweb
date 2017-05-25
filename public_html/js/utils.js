/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*      CONSTANTES          */
var config = {
                apiKey: "AIzaSyAL8fCskYf-G2CQMljQ-GGaLrBa352EtVs",
                authDomain: "mi-ambulancia.firebaseapp.com",
                databaseURL: "https://mi-ambulancia.firebaseio.com",
                storageBucket: "mi-ambulancia.appspot.com"
            };
function getLocation() {

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);

                } else {
                    alert("Geolocation is not supported by this browser.");
                }
            }
/*          FUNCIONES CLINICA WEB         */
function setFecha(strFechasfechas, strFechastiempo) {
    var dia = parseInt(strFechasfechas[2]);
    var mes = parseInt(strFechasfechas[1]);
    var year = parseInt(strFechasfechas[0]);

    var hora = parseInt(strFechastiempo[0]);
    var min = parseInt(strFechastiempo[1]);
    var seg = parseInt(strFechastiempo[2]);

    var FechaData = new Date(year, mes, dia, hora, min, seg);
    return FechaData;
}

function setFecha1(fecha) {

    var str1 = fecha.split("_");
    var strFechas1fechas = str1[0].split(":");
    var strFechas1tiempo = str1[1].split(":");

    var nuevaFecha1 = setFecha(strFechas1fechas, strFechas1tiempo);

    return nuevaFecha1;
}

function calcularTiempo(diff) { // la diferencia en segundos

    var min = Math.floor(diff / 60);
    var sec = diff - (min * 60);

    var timeArray = [min, sec];
    return timeArray;

}

function checkear() {
    $('#test1').attr('checked', false);
}

function handleModalClinica(tipoEmergencia, numPacientes) {
    
    $("#tipoEmergenciaTexto").empty();
        $("#numeroPacientesTexto").empty();

        $("#tipoEmergenciaTexto").append("Tipo de emergencia: " + tipoEmergencia);
        $("#numeroPacientesTexto").append("Numero de Pacientes: " + numPacientes);

    
}

function resetClinica() {
    
    $("#lista-formulario").attr("hidden", true);
                $("#logro").attr("hidden", false);
                $("#contenedor1").attr("hidden", false).empty();
                $("#contenedor2").attr("hidden", false).empty();
                $('#test1').prop('checked', false);
                $('#test2').prop('checked', false);
                $('#rad_si_Femenino').prop('checked', false);
                $('#rad_si_Masculino').prop('checked', false);
                $("#notis_Pedidos").addClass("badge");
    
}

function vaciar(id) {
    $('#' + id).empty();
}







