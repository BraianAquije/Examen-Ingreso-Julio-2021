/*
Bienvenidos.
Debemos ingresar los votos de las urnas en las escuelas para las elecciones:
Numero de urna (Validos para esta seccion electoral 3000 - 3100)
Localidad de la urna ("Avell", "Lanus", "Quilmes")
Cantidad de personas que votaron urna (Maximo de votantes 300)
Cantidad de votos partido "A"
Cantidad de votos partido "B"
Cantidad de votos "Blanco"
Cantidad de votos "Impugnados"

Informes:
-Informar urna con mayor cantidad de votos en Blanco e Impugnados
-Informar partido con mayor cantidad de votos en total
-Informar Localidad con mayor número de personas que acudieron a la elección
*/
function mostrar() {
    let numeroUrna;
    let localidadUrna;
    let cantPersonasVotaron;
    let cantDeVotosA;
    let cantDeVotosB;
    let cantDeVotosC;
    let cantDeVotosEnBlanco;
    let cantDeVotosImpugnados;

    let cantTotalDeVotosA = 0;
    let cantTotalDeVotosB = 0;
    let cantTotalDeVotosC = 0;
    let cantTotalDeVotosEnBlanco = 0;
    let cantTotalDeVotosImpugnados = 0;

    let cantidadQueVotaronEnQuilmes =0;
    let cantidadQueVotaronEnAvellaneda =0;
    let cantidadQueVotaronEnLanus =0;

    let respuesta = "si"

    while (respuesta == "si") {
        numeroUrna = parseInt(prompt("Ingrese numero Urna"));
        while (numeroUrna < 3000 || numeroUrna > 3100 || isNan(numeroUrna)) {
            numeroUrna = parseInt(prompt("Reingrese numero Urna"));
        }
        localidadUrna = prompt("Ingrese localidad Urna");
        while (localidadUrna != "avellaneda" && localidadUrna != "lanus" && localidadUrna != "quilmes") {
            localidadUrna = prompt("Reingrese localidad Urna");
        }
        cantPersonasVotaron = parseInt(prompt("Ingrese cant Personas Votaron"));
        while (cantPersonasVotaron < 0 || cantPersonasVotaron > 300 || isNan(cantPersonasVotaron)) {
            cantPersonasVotaron = parseInt(prompt("Reingrese cant Personas Votaron"));
        }
        cantDeVotosA = parseInt(prompt("Ingrese cant De Votos A"));
        while (cantDeVotosA < 0 || cantDeVotosA > 300 || isNaN(cantDeVotosA)) {
            cantDeVotosA = parseInt(prompt("Reingrese cant De Votos A"));
        }
        cantDeVotosB = parseInt(prompt("Ingrese cant De Votos B"));
        while (cantDeVotosB < 0 || cantDeVotosB > 300 || isNaN(cantDeVotosB)) {
            cantDeVotosA = parseInt(prompt("Reingrese cant De Votos A"));
        }
        cantDeVotosC = parseInt(prompt("Ingrese cant De Votos C"));
        while (cantDeVotosC < 0 || cantDeVotosC > 300 || isNaN(cantDeVotosC)) {
            cantDeVotosC = parseInt(prompt("Reingrese cant De Votos C"));
        }
        cantDeVotosEnBlanco = parseInt(prompt("Ingrese cantDeVotosEnBlanco"));
        while (cantDeVotosEnBlanco < 0 || cantDeVotosEnBlanco > 300 || isNaN(cantDeVotosEnBlanco)) {
            cantDeVotosEnBlanco = parseInt(prompt("Reingrese cantDeVotosEnBlanco"));
        }
        cantDeVotosImpugnados = parseInt(prompt("Ingrese cantDeVotosImpugnados"));
        while (cantDeVotosImpugnados < 0 || cantDeVotosImpugnados > 300 || isNaN(cantDeVotosImpugnados)) {
            cantDeVotosImpugnados = parseInt(prompt("Reingrese cantDeVotosImpugnados"));
        }

        switch (localidad) {
            case "avellaneda":
                cantidadQueVotaronEnAvellaneda++;
                break;

            case "quilmes":
                cantidadQueVotaronEnQuilmes++;
                break;
            case "lanus":
                cantidadQueVotaronEnLanus++;
                break;
        }

        if (cantidadQueVotaronEnAvellaneda> cantidadQueVotaronEnQuilmes&& cantidadQueVotaronEnAvellaneda> cantidadQueVotaronEnLanus){
            cantidadQueVotaronMaximo= "avellaneda";
        }
        else if (cantidadQueVotaronEnQuilmes> cantidadQueVotaronEnLanus){
            cantidadQueVotaronMaximo= "quilmes";
        }
        else {
            cantidadQueVotaronMaximo= "lanus";
        }




    }
}  // fin funcion

