/* console.log("si esta vinculado")

let pregunta = prompt("Cómo estás?")

if(pregunta == "bien") {
    alert("Buenísimo, me alegro por vos")
    alert("Me alegro por vos, cuidame eso")
}else if(pregunta == "mal"){
    alert("Uh, bajon")
}else if(pregunta == "maso"){
    alert("Por qué?")
}
 */
/* let mentor = {
    name: "Lucas",
    age: 22,
    undefined: undefined
    heLikesPizza: prompt("Le gusta la pizza?")
}

if(mentor.heLikesPizza = "si"){
   alert("A mi también :D") ALERT ES UNA SENTENCIA 
   let otrapregunta = prompt("y qué gusto te gusta más?")
   if(otrapregunta == "muzza"){
    alert("o mai gad")
   }else if( otrapregunta = "calabresa"){
    alert("Buena elección chaval")
   }else{
    alert("no te entendí, una disculpa")
   }
}else if(mentor.heLikesPizza == "no"){
    alert("vos te lo perdes")
}else{
    alert("Puedes volver a repertirlo ?")
} */

/* if(1 == 1) console.log("es true") */

//SWITCH CASE

/* let superheroe = prompt("Qué superhéroe eres?")
switch(superheroe{
    case "thor":
        console.log("Es thor")
        break
    case "superman":
        console.log("es superman")
        break
    case "spiderman":
        console.log("es spiderman")
        break
    case "mateo":
        console.log("es mateo")
        break
} */

//PUNTO 1

/* let numeroUno = 11
let numeroDos = 12
let numeroTres = 2

if (numeroUno > numeroDos){
    console.log(numeroUno + " es mayor que " + numeroDos);
}else{
    console.log(numeroUno + " no es mayor que " + numeroDos);
} */

//PUNTO 2

/* if (numeroUno !== numeroDos){
    console.log("Son distintos");

}else{
    console.log("Son iguales");
} */

//PUNTO 3

/* if (numeroUno > numeroDos){
    console.log("El primero es mayor")
}else{
    if (numeroDos > numeroUno){
        console.log("El segundo es mayor");
    }else{
        console.log("Son iguales");
    }
} */

//PUNTO 4

/* if (numeroUno < numeroDos && numeroUno < numeroTres){
    console.log(numeroUno + " es el menor");
}else{
    if (numeroDos < numeroUno && numeroDos < numeroTres){
        console.log(numeroDos + " es el menor");
    }else{
        console.log(numeroTres + " es el menor");
    }
} */

//PUNTO 5

/* let personaUno = {
    nombre: "Piyu",
    edad: 18,
    altura: 150
}

let personaDos = {
    nombre: "Angel",
    edad: 16,
    altura: 190
}

if (personaUno.edad > personaDos.edad){
    console.log("La primer persona es mayor");
}else{
    console.log("La segunda persona es mayor");
}

if (personaUno.altura > personaDos.altura){
    console.log("La primer persona es más alta");
}else{
    console.log("La segunda persona es más alta");
} */

//PUNTO 6

/* let persona = {
    nombre: prompt("Ingrese su nombre"),
    edad: prompt("Ingrese su edad"),
    altura: prompt("Ingrese su altura"),
    vision: prompt("Ingrese su nivel de visión (0-10)")
}

if (persona.edad >= 18 && persona.altura > 150 && persona.vision >= 8){
    console.log(persona.nombre + " está capacitado para conducir.");
}else{
    console.log(persona.nombre + " no reúne los requisitos mínimos.");
} */

//PUNTO 7

/* let usuario = {
    nombre: prompt("Ingrese su nombre"),
    entrada: prompt("Indique si posee una entrada"),
    pase: prompt("Indique si posee pase normal o vip")
}

let accesoEntrada

let comprarEntrada

let dineroUsuario

let dineroEntrada

if (usuario.nombre == "Hugo" || usuario.pase == "vip"){
    console.log("¡Bienvenido/a!");
}else{
    if (usuario.entrada == "si" || usuario.entrada == "s" || usuario.entrada == "true"){
       accesoEntrada = prompt("¿Desea utilizar su entrada?")
       if (accesoEntrada == "si" || accesoEntrada == "s" || accesoEntrada == "true"){
        console.log("¡Bienvenido/a!");
       }else{
        console.log("¡Muchas gracias, hasta luego!");
       }
    }else{
        comprarEntrada = prompt("¿Desea comprar unra entrada?")
        if (comprarEntrada == "si" || comprarEntrada == "s" || comprarEntrada == "true"){
            dineroEntrada = prompt("¿Cuánto dinero posee?")
            if (dineroEntrada >= 1000){
                console.log("¡Entrada vendida, bienvenido/a!");
            }else{
                console.log("No posee suficiente dinero.");
            }
        }else{
            console.log("¡Hasta luego!");
        }
    }
} */

//PUNTO 8

/* let numeroIncognita = 4

let numeroIngresadoUno = prompt("Ingrese un número del 1 al 10")

let numeroIngresadoDos

let numeroIngresadoTres

if (numeroIngresadoUno == numeroIncognita){
    console.log("Ganaste, haz adivinado el número");
}else{
    if (numeroIngresadoUno < numeroIncognita){
        console.log("El número ingresado es menor, vuelve a intentarlo");
    }else{
        console.log("El número ingresado es mayor, vuelve a intentarlo");
    } numeroIngresadoDos = prompt("Ups, intenta de nuevo")
        if (numeroIngresadoDos == numeroIncognita){
            console.log("Ganaste, haz adivinado el número");
        }else{
          if (numeroIngresadoDos < numeroIncognita){
            console.log("El número ingresado es menor, vuelve a intentarlo");
          }else{
            console.log("El número ingresado es mayor, vuelve a intentarlo");
          }
        } numeroIngresadoTres = prompt("Ups, intenta de nuevo")
            if (numeroIngresadoTres == numeroIncognita){
                console.log("Ganaste, haz adivinado el número");
            }else{
                if (numeroIngresadoTres < numeroIncognita){
                    console.log("El número ingresado es menor, vuelve a intentarlo");
                }else{
                    console.log("El número ingresado es mayor, vuelve a intentarlo");
                }
            }
} */


//PUNTO 9

/* let edad = prompt("Ingrese su edad")

if (edad <= 12){
    console.log("Eres un infante");
}else{
    if (edad >= 13 && edad <= 18){
        console.log("Eres un adolescente");
    }else{
        if (edad >= 19 && edad <= 45){
            console.log("Eres un mayor joven");
        }else{
            if (edad >= 46 && edad <= 99){
                console.log("Eres un anciano");
            }else{
                if (edad >= 100)
                console.log("¿Realmente tienes esa edad?");
            }
        }
    }
} */

//PUNTO 10

/* let usuarioUno = prompt ("Ingrese una opcion: piedra,papel,tijera")
let usuarioDos = prompt ("Ingrese una opcion: piedra,papel,tijera")


if (usuarioUno === "piedra" && usuarioDos === "piedra" || usuarioUno === "papel" && usuarioDos === "papel" || usuarioUno  === "tijeras" && usuarioDos === "tijeras") {
    console.log("Empate!");
}else{
    if (usuarioUno == "piedra" && usuarioDos == "tijera" || usuarioUno == "tijera" && usuarioDos == "papel" || usuarioUno == "papel" && usuarioDos == "piedra" ){
        console.log("Gano el uno");
    }else{
        if (usuarioUno == "piedra" && usuarioDos == "papel" || usuarioUno == "tijera" && usuarioDos == "piedra" || usuarioUno == "papel" && usuarioDos == "tijera" ) {
            console.log("Gana el dos");
        }else{
            if (usuarioUno != "piedra" || usuarioUno != "papel"  ||usuarioUno != "tijera ") {
                console.log("Usuario uno hizo trampa");
            }else {
                if (usuarioDos != "piedra" || usuarioDos != "papel" || usuarioDos != "tijera"){
                    console.log("Usuario dos hizo trampa");
                }
            }
        }
    } 
} */

//PUNTO 11

/* let color = prompt ("Ingrese un color")

switch (color) {
    case "blanco":
        console.log("Falta color");
        break;
    case "negro":
        console.log("Falta color");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    case "azul":
        console.log("El color del agua");
        break;
    case "amarillo":
        console.log("El color del sol");
        break;
    case "rojo":
        console.log("El color del fuego");
        break;
    case "marron":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Exccelente eleccion, no lo teniamos pensado");
        break;
} */

//PUNTO 12