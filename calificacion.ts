//EJERCICIO CALIFICACION

let parcial1 : number = 7.5;
let parcial2 : number = 6.25;
let parcial3 : number = 9;
let notaParcial : number = (parcial1 + parcial2 + parcial3) / 3;
let examenFinal : number = 5.5;
let trabajoFinal : number = 8.75;
let calificacion : number = ((notaParcial * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15));
let resultado : string = "La calificacion final en la asignatura para el alumno es: " + calificacion;
console.log(resultado);
console.log("¡Resultados hecho también en la página web!")
console.log("");
 
//EJERCICIO ARRAY VIDEOJUEGOS
console.log("Array de Videojuegos")
let videojuegos : Array<string> = ["The Last Of Us", "Super Mario Bros", "Red Dead Redemption", "Uncharted", "The Legend Of Zelda", "Mario Galaxy", "FIFA"];
console.log(videojuegos)
console.log("")
console.log("Array de videojuegos sin el videojuego de Mario Bros")
let noImprimirMario = videojuegos.filter(element => !element.toLowerCase().includes("mario"));
console.log(noImprimirMario);
console.log("")

//Factorial
console.log("Factorial de un numero")
function factorial(num: number) : number {
    if (num == 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log("El factorial de 10 es: " + factorial(10)) // 3628800
console.log("El factorial de 5 es: " + factorial(5)) // 120
console.log("El factorial de 3 es: " + factorial(3)) // 6
console.log("")

let presentacion : string = "Boletín de notas oficial de BABEL";
let aprobado : string = "El alumno ha aprobado la asignatura";
let felicitacion : string = "ENHORABUENA, HAS SACADO UN " + Math.floor(calificacion);

let cabeceraHeader = document.createElement('HEADER');
let cabeceraH3 = document.createElement('H3');
let parrafoAprobado = document.createElement('P');
let spanFelicitacion = document.createElement('SPAN');

cabeceraHeader.textContent = presentacion
cabeceraH3.textContent = resultado
parrafoAprobado.textContent = aprobado;
spanFelicitacion.textContent = felicitacion;

document.body.appendChild(cabeceraHeader);
document.body.appendChild(cabeceraH3);
document.body.appendChild(parrafoAprobado);
document.body.appendChild(spanFelicitacion);

