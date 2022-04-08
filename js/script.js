let dato=prompt("Escriba su edad actual")

// console.log(dato)


function edad(){

    if(dato>=18){
        alert("usted ya puede conducir");
    }else{
        alert("es menor de edad")
    }
}
edad();

const ejercicio2 = () => {
    // define variable texto donde se va a guardar cada nuevo input
    let int;

    // se inicia un while
    while (true) {
        // se guarda input en una variable
        let input = prompt('Ingrese un numero');

        // se chequea se se clickeo cancelar o se ingresó algún dato
        if(input == null) {
            // si se clickeo cancelar se sale del while
            console.log('cancel');
            break;
        }else{
            // sino se concatena el input con la variable text
            int = `${int}-${input}`;
        }
    }

    // se elimina el primer caracter del text, es en realidad un guion
    let formattedInt = int.substring(1);

    // se muestra el resultado
    alert(`Las cadenas concatenadas son: ${formattedInt}`);
}
ejercicio2();
const ejercicio3 = () => {
    let suma=0;
    let nuevo=0;
    while (true) {
        let input = prompt('Ingrese un numero');
        if(input == null) {
            console.log('cancel');
            break;
        }else{
            suma = `${suma}+${input}`;
            nuevo =(parseInt(nuevo)) + (parseInt(input)); 
        }
    }
    alert(`Las cadenas concatenadas son: ${suma}`);
    alert(`la suma es: ${nuevo}`)
}
ejercicio3();
const ejercicio4 = () =>{
       //PEDIMOS TODOS LOS DATOS
       var nombre1 = prompt("Nombre 1:");
       var edad1 = Number(prompt("Edad 1:"));
   
       var nombre2 = prompt("Nombre 2:");
       var edad2 = Number(prompt("Edad 2:"));
   
       var nombre3 = prompt("Nombre 3:");
       var edad3 = Number(prompt("Edad 3:"));
   
       //Función max() devuelve el mayor de los argumentos pasados.
       var maximo = Math.max(edad1, edad2, edad3);
   
       if (maximo == edad1) {
           document.write("El mayor es: " + nombre1);
       }
       if (maximo == edad2) {
           document.write("El mayor es: " + nombre2);
       }
       if (maximo == edad3) {
           document.write("El mayor es: " + nombre3);
       }
} 
ejercicio4();
const ejercicio5 = ()=>{
    var i = 0;
    var num;
    var uno = 0;
    var dos = 0;
    var tres = 0;
    do {
        num = Math.floor((Math.random() * 99) + 1);
        if ((num != uno) && (num != dos) && (num != 3)) {
            document.write(num + "<br>");
            i++;
            if (i == 1) {
                uno = num;
            }
            if (i == 2) {
                dos = num;
            }
            if (i == 3) {
                tres = num;
            }
        }
    } while (i < 3);
}
ejercicio5();
const ejercicio6 = ()=>{
    var a = e = i = o = u = blancos = 0;
    vectorLetras = consultarTexto();
    
    function consultarTexto(){
        var pideTexto = window.prompt("escribe un texto cualquiera");
        var textoRoto = pideTexto.toLowerCase().split("");
        return textoRoto;
    }        
    
    for(k=0;k < vectorLetras.length;k++){
        
        switch(vectorLetras[k]){
            case "a":
            case "à":
            case "á":
                a++;
                break;
            case "e":
            case "é":
            case "è":
                e++;
                break;
            case "i":
            case "í":
            case "ì":
                i++;
                break;
            case "o":
            case "ó":
            case "ò":
                o++;
                break;
            case "u":
            case "ú":
            case "ù":
                u++;
                break;
            case " ":
                blancos++;
        }
    }
    
    totalVocales = a+e+i+o+u;
    
    document.write("Hay " +  a + " vocales 'a'<br>");
    document.write("Hay " +  e + " vocales 'e'<br>");
    document.write("Hay " +  i + " vocales 'i'<br>");
    document.write("Hay " +  o + " vocales 'o'<br>");
    document.write("Hay " +  u + " vocales 'u'<br>");
    
    document.write("<br>");
    document.write("Total de vocales: " + totalVocales);
    document.write("<br>");
    document.write("Total de espacios en blanco: " + blancos);
    document.write("<br>");
    document.write("Total de carácteres escritos: " + vectorLetras.length);
    document.write("<br>");
    document.write("Texto original: <b>" + vectorLetras.join("") + "</b>");
}
ejercicio6();
const ejercicio7 = ()=>{
    var cadena = prompt("Introduce un Texto que contenga paréntesis:");
    //Longitud de la cadena
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    var copiar = false;
        
	for (j = 0; j < numchar; j++) {
		car = cadena.charAt(j);    //recupera el caracter i del string.
		if (car == ")") {
            copiar = false;
        }
        if (copiar) {
            salida = salida + car;
        }
        if (car == "(") {
                copiar = true;
        }
    }
    document.write(salida);
}
ejercicio7();
const ejercicio8 = ()=>{
    var cadena = prompt("Introduce un Texto:");
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    for (j = 0; j < numchar; j++) {
        car = cadena.charAt(j);    //recupera el caracter i del string.
        salida = car + salida;
    }
    document.write(salida);
}
ejercicio8();
const ejercicio13 = ()=>{
    var limit = 10;
	var fibo = [0,1];

	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		document.write(fibo[i]+"<br/>");	
	}
}
ejercicio13();
const ejercicio9 = ()=>{
//Genera un número aleatorio entre un rango de enteros
function patito(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = patito(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Perdiste!");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Empate!");
    }
}
else
{
    alert("¿Pos qué carajo?");
}}
ejercicio9();
const ejercicio10 = ()=>{
    function masIva(precio, iva){
        iva = iva || 21
        var coniva = (precio + precio*iva/100);
        return coniva;
      }
      var precio = Number(prompt("Introduce un precio"));
      var iva = Number(prompt("Introduce el iva"));
      if(iva > 0){
        var resultado = masIva(precio, iva);
      }
      else{
        var resultado = masIva(precio);
      }
      document.write("Precio sin iva: " + precio);
      document.write("<br>Precio más Iva: " + resultado);
}
ejercicio10();