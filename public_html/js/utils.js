/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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

function calcularTiempo(diff) { // la diferencia en segundos
    
    var timeArray = [ 0, diff];
   
    while (diff >= 60) {
        timeArray[1] ++;
        timeArray[0] -=  60;
    } 
    
    
    return timeArray;
    
    
}


function vaciar(id) {
                $('#' + id).empty();
            }





