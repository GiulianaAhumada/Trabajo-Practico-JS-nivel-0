// Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar”
// deben mostrarse todas las cadenas concatenadas con un - (guión).
var contador="";
do
{
var cadena = prompt ("Ingrese alguna cadena de texto");
    var cadenaint2 = parseInt(cadena);
    if(isNaN(cadenaint2))
    {
        contador = contador + "-" + cadena;
    }
    else
    {
        alert ("No ingresaste un numero");
    }
}
while (cadena != undefined);
document.write(contador);