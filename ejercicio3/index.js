// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá
// indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de
// los números introducidos.

var suma=0;
do {
    var numero = prompt("Introduce un numero");
    var numeroint2 = parseInt(numero);
    if(isNaN(numeroint2))
    {
        alert ("No ingresaste un numero");
    }
    else
    {
       suma = suma + numeroint2;
    }
} while (numero != undefined);
document.write(suma);