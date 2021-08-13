/*
Debemos realizar la carga de 5(cinco) participantes de una competencia de Enduro
de cada uno se deben cargar los siguientes datos:
-el nombre del participante,
-la categoría (validar "MX1", "MX2" o "MX3"),
-el tiempo (validar entre 10 y 30),
-la cantidad de vueltas (no puede ser 0 o negativo y no debe superar las 20 vueltas),
-el tipo de cilindrada("250", "500" o "750" ),
-y la Marca.
Se debe Informar al usuario lo siguiente:
	a) El promedio de cantidad de vueltas por categoría
	b) El tipo de cilindrada con más cantidad de vueltas en el total de la carrera
	c) Cuántas motos de categoría "MX1" con menos de 15 vueltas (inclusive) hubo al final de la carrera
	d) La marca y nombre del participante con menor tiempo.
*/
function mostrar() {
	let nombre;
	let categoria;
	let tiempo;
	let cantidadVueltas;
	let cilindradas;
	let marcas;

	let cantidadDeVueltasTotalMx1 = 0;
	let cantidadDeVueltasTotalMx2 = 0;
	let cantidadDeVueltasTotalMx3 = 0;
	let cantidadDeCarrerasMx1 = 0;
	let cantidadDeCarrerasMx2 = 0;
	let cantidadDeCarrerasMx3 = 0;
	let promedioCantidadDeVueltasMx1;
	let promedioCantidadDeVueltasMx2;
	let promedioCantidadDeVueltasMx3;

	let cantidadDeVueltasTotalCilindrada250 = 0;
	let cantidadDeVueltasTotalCilindrada500 = 0;
	let cantidadDeVueltasTotalCilindrada750 = 0;
	let mayorCantidadDeVueltasPorCilindrada = 0;

	let mx1ConMenosDe15Vueltas = 0;
	let menorTiempo = 0;
	let marcaMenorTiempo = 0;
	let nombreMenorTiempo = 0;


	let flag = true;

	for (i = 0; i < 5; i++) {
		nombre = prompt("Ingrese el nombre");

		categoria = prompt("Ingrese categoria");
		while (categoria != "mx1" && categoria != "mx2" && categoria != "mx3") {
			categoria = prompt("Reingrese categoria");
		}
		tiempo = parseFloat(prompt("Ingrese tiempo"));
		while (tiempo < 10 || tiempo > 30 || isNaN(tiempo)) {
			tiempo = parseFloat(prompt("Reingrese tiempo"));
		}
		cantidadVueltas = parseInt(prompt("Ingrese cantidad Vueltas"));
		while (cantidadVueltas < 0 || cantidadVueltas > 20 || isNaN(cantidadVueltas)) {
			cantidadVueltas = parseInt(prompt("Reingrese cantidadVueltas"));
		}
		cilindradas = prompt("Ingrese cilindradas");
		while (cilindradas != "250" && cilindradas != "500" && cilindradas != "750") {
			cilindradas = prompt("Reingrese cilindradas");
		}
		marcas = prompt("Ingrese el marcas");

		switch (categoria) {
			case "mx1":
				cantidadDeCarrerasMx1++;
				cantidadDeVueltasTotalMx1 = cantidadDeVueltasTotalMx1 + cantidadVueltas;
				if (cantidadVueltas <= 15) {
					mx1ConMenosDe15Vueltas++;
				}
				break;
			case "mx2":
				cantidadDeCarrerasMx2++;
				cantidadDeVueltasTotalMx2 = cantidadDeVueltasTotalMx2 + cantidadVueltas;
				break;
			case "mx3":
				cantidadDeCarrerasMx3++;
				cantidadDeVueltasTotalMx3 = cantidadDeVueltasTotalMx3 + cantidadVueltas;
				break;
		}

		switch (cilindradas) {
			case "250":
				cantidadDeVueltasTotalCilindrada250 = cantidadDeVueltasTotalCilindrada250 + cantidadVueltas;
				break;
			case "500":
				cantidadDeVueltasTotalCilindrada500 = cantidadDeVueltasTotalCilindrada500 + cantidadVueltas;
				break;
			case "750":
				cantidadDeVueltasTotalCilindrada750 = cantidadDeVueltasTotalCilindrada750 + cantidadVueltas;
				break;
		}

		if (cantidadDeVueltasTotalCilindrada250 > cantidadDeVueltasTotalCilindrada500 && cantidadDeVueltasTotalCilindrada250 > cantidadDeVueltasTotalCilindrada500) {
			mayorCantidadDeVueltasPorCilindrada = "250";
		}
		else if (cantidadDeVueltasTotalCilindrada500 > cantidadDeVueltasTotalCilindrada500) {
			mayorCantidadDeVueltasPorCilindrada = "500";
		}
		else {
			mayorCantidadDeVueltasPorCilindrada = "750";
		}

		if (flag == true || tiempo < menorTiempo) {
			marcaMenorTiempo = marcas;
			nombreMenorTiempo = nombre;
			flag = false
		}


	}
	promedioCantidadDeVueltasMx1 = cantidadDeVueltasTotalMx1 / cantidadDeCarrerasMx1;
	promedioCantidadDeVueltasMx2 = cantidadDeVueltasTotalMx2 / cantidadDeCarrerasMx2;
	promedioCantidadDeVueltasMx3 = cantidadDeVueltasTotalMx3 / cantidadDeCarrerasMx3;

	document.write(
		"El promedio de cantidad de vueltas por categoría es: -Mx1: " +promedioCantidadDeVueltasMx1+" -Mx2: "+promedioCantidadDeVueltasMx2+" -Mx3: "+promedioCantidadDeVueltasMx3+"<br>"+
		"El tipo de cilindrada con más cantidad de vueltas en el total de la carrera es: "+mayorCantidadDeVueltasPorCilindrada +"<br>"+
		"Cuántas motos de categoría MX1 con menos de 15 vueltas (inclusive) hubo al final de la carrera: "+mx1ConMenosDe15Vueltas+"<br>"+
		"La marca y nombre del participante con menor tiempo es: "+marcaMenorTiempo+" "+nombreMenorTiempo
	);
}