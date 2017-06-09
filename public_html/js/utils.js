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
                $("#contenedor1").attr("hidden", false);
                $("#contenedor2").attr("hidden", false);
                $('#test1').prop('checked', false);
                $('#test2').prop('checked', false);
                $('#rad_si_Femenino').prop('checked', false);
                $('#rad_si_Masculino').prop('checked', false);
                $("#notis_Pedidos").addClass("badge");
    
}

function vaciar(id) {
    $('#' + id).empty();
}

/*  Funciones estadisticas  */
function setConfigPie(contadoresTipo){
   
    var configPie = {
 	type: "pie", 
 	backgroundColor: "#FFFFFF",
 	plot: {
 	  borderColor: "#FFFFFF",
 	  borderWidth: 2,
 	  // slice: 90,
 	  valueBox: {
 	    placement: 'out',
 	    text: '%t\n%npv%',
 	    fontFamily: "Open Sans"
 	  },
 	  tooltip:{
 	    fontSize: '18',
 	    fontFamily: "Open Sans",
 	    padding: "5 10",
 	    text: "%npv%"
 	  },
 	  animation:{
      effect: 2, 
      method: 5,
      speed: 500,
      sequence: 1
    }
 	},
 	title: {
 	  fontColor: "#9C27B0",
 	  text: 'Tipos de emergencia',
 	  align: "center",
 	  offsetX: 10,
 	  fontSize: 25
 	},
 	plotarea: {
 	  margin: "20 0 0 0"  
 	},
	series : [
		{
			values : [contadoresTipo[1]],
			text: "Cardiorespiratorio",
		  backgroundColor: '#50ADF5',
		},
		{
		  values: [contadoresTipo[0]],
		  text: "Accidente de transito",
		  backgroundColor: '#FF7965'
		},
		{
		  values: [contadoresTipo[2]],
		  text: 'Quemaduras',
		  backgroundColor: '#FFCB45'
		},
		{
		  text: 'Otro',
		  values: [contadoresTipo[3]],
		  backgroundColor: '#6FB07F'
		}
	]
};
    return configPie;
}









