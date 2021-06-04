// Pide una nota (número). Muestra la calificación según la nota:
// 0-3: Muy deficiente
//  3-5: Insuficiente
//  5-6: Suficiente
//  6-7: Bien
//  7-9: Notable
//  9-10: Sobresaliente 
do {
	var nota = prompt("Introduce tu nota");
    var notaint2 = parseInt(nota);
    if(isNaN(notaint2))
    {
        alert ("No ingresaste un numero");
    }
	
    else
    {
		if (nota > 0 && nota <= 10) //Si la nota es entre 0 y 10 da su determinado mensaje
		{
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiete");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		
		else//Si la nota no es entre 0 y 10 
		{
			alert("Nota equivocada, no está entre 0 y 10. Vuelva a intentarlo");
		}
	}
} while (nota != undefined);//Mientras no aprete cancelar

