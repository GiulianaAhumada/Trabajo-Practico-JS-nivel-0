// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el
// usuario de la siguiente forma : (suponiendo que indica 30).
// 30303030303030303030303030303030303
// 2828282828282828282828282
// .....
// 333
// 1
var repnum = prompt("Introduce el numero que quieras que se repita");
var repnumint2 = parseInt(repnum);
if(isNaN(repnumint2))
{
    alert("No introduciste un numero, intentalo de nuevo");
}   
    else 
    {
        var rep;
        var i;
        for (i = repnum; i >= 1; i--) 
        {
            for (rep = i; rep >= 1; rep--)
            {
                document.write(i);
            }
            document.write("<br>");
         }
}
