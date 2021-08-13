/*
Realizar el algoritmo que permita ingresar los datos de las ventas
on-line de un sitio de compra-venta, los datos solicitados son:
-usuario
-Sexo ( femenino , masculino , no binario)
-edad (validar)
-Tipo producto("tv";"pc";"celular")
-precio(mas de cero y menos de 100000)
-cantidad vendida (entre 0 y 10)
Se pueden ingresar ventas hasta que el usuario desee.
Por document.write, se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El promedio de cantidad de productos de tipo "tv" vendidas
b) El nombre del mas joven de los usuarios
c) El promedio de precio por sexo
d) La edad y nombre del usuario que vendió mas celulares
*/

function mostrar() {
    let usuario;
    let sexo;
    let edad;
    let tipoProducto;
    let precio;
    let cantidadVendida;
    let comprasDeTv = 0;
    let comprasDePc = 0;
    let comprasDeCelular = 0;
    let cantidadDeTvVendida = 0;
    let cantidadDeCelularVendida = 0;
    let cantidadTotalDeProductos = 0;
    let cantF = 0;
    let cantM = 0;
    let cantNB = 0;
    let promedioSexoF;
    let promedioSexoM;
    let promedioSexoNB;
    let promedioTvVendida;
    let promedioPcVendida;
    let promedioCelularVendida;
    let elMasJoven = 0;
    let nombreDelMasJoven = 0;
    let precioTotal = 0;
    let cantidadMaximaPorUsuario = 0;
    let edadQueMasVendio;
    let nombreQueMasVendio;


    let flag = true;
    let flagVentas = true;
    let respuesta = "si"

    while (respuesta == "si") {
        nombre = prompt("Ingrese el nombre");

        sexo = prompt("Ingrese sexo");
        while (sexo != "f" && sexo != "m" && sexo != "nb") {
            sexo = prompt("Reingrese sexo");
        }
        edad = parseInt(prompt("Ingrese edad"));
        while (edad < 0 || isNan(edad)) {
            edad = parseInt(prompt("Reingrese edad"));
        }

        tipoProducto = prompt("Ingrese tipoProducto");
        while (tipoProducto != "tv" && tipoProducto != "pc" && tipoProducto != "celular") {
            tipoProducto = prompt("Reingrese tipoProducto");
        }
        precio = parseInt(prompt("Ingrese precio"));
        while (precio < 0 || precio > 100000 || isNaN(precio)) {
            precio = parseInt(prompt("Reingrese precio"));
        }
        cantidadVendida = parseInt(prompt("Ingrese cantidad Vendida"));
        while (cantidadVendida < 0 || cantidadVendida > 10 || isNaN(cantidadVendida)) {
            cantidadVendida = parseInt(prompt("Reingrese cantidad Vendida"));
        }

        switch (tipoProducto) {
            case "tv":
                comprasDeTv++;
                cantidadDeTvVendida = cantidadDeTvVendida + cantidadVendida;
                break;
            case "pc":
                comprasDePc++;
                cantidadDePCVendida = cantidadDePcVendida + cantidadVendida;
                break;
            case "celular":
                comprasDeCelular++;
                cantidadDeCelularVendida = cantidadDeCelularVendida + cantidadVendida;
                break;
        }

        if (flag == true || edad < elMasJoven) {
            nombreDelMasJoven = nombre;
            flag = false;
        }

        switch (sexo) {
            case "m":
                cantM++;
                break;
            case "f":
                cantF++;
                break;
            case "nb":
                cantNB++;
                break;

        }
        precioTotal = precioTotal + precio;
        cantidadTotalDeProductos = cantidadTotalDeProductos + cantidadVendida;

        if (flagVentas == true || cantidadVendida > cantidadMaximaPorUsuario) {
            edadQueMasVendio = edad;
            nombreQueMasVendio = nombre;
        }
    }
    promedioTvVendida = cantidadTotalDeProductos / comprasDeTv;
    promedioCelularVendida = cantidadTotalDeProductos / comprasDeCelular;

    promedioSexoF = precioTotal / cantF;
    promedioSexoM = precioTotal / cantM;
    promedioSexoNB = precioTotal / cantNB;


    document.write(
        "El promedio de cantidad de productos de tipo tv vendidas es: " +promedioTvVendida+ "<br>" +
        "El nombre del mas joven de los usuarios" +nombreDelMasJoven+ "<br>" +
        "El promedio de precio por sexo: -Femenino" +promedioSexoF+ " -Masculino: " +promedioSexoM+" -No binario: "+promedioSexoNB+"<br>" +
        "La edad y nombre del usuario que vendió mas celulares es: "+nombreQueMasVendio+ " y tiene "+ edadQueMasVendio
    );
}