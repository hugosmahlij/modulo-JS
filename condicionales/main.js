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


let numeroUno = 14
let numeroDos = 12
let numeroTres = 2

if (numeroUno > numeroDos){
    console.log(numeroUno + " es mayor que " + numeroDos);
}

if (numeroUno !== numeroDos){
    console.log("Son distintos");

}else{
    console.log("Son iguales");
}

if (numeroUno > numeroDos){
    console.log("El primero es mayor")
}else{
    if (numeroDos > numeroUno){
        console.log("El segundo es mayor");
    }else{
        console.log("Son iguales");
    }
}

if (numeroUno < numeroDos && numeroUno < numeroTres){
    console.log(numeroUno + " es el menor");
}else{
    if (numeroDos < numeroUno && numeroDos < numeroTres){
        console.log(numeroDos + " es el menor");
    }else{
        console.log(numeroTres + " es el menor");
    }
}

let personaUno = {
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
}

let persona = {
    nombre: prompt("Ingrese su nombre"),
    edad: prompt("Ingrese su edad"),
    altura: prompt("Ingrese su altura"),
    vision: prompt("Ingrese su nivel de visión (0-10)")
}

if (persona.edad >= 18 && persona.altura > 150 && persona.vision >= 8){
    console.log(persona.nombre + " está capacitado para conducir.");
}else{
    console.log(persona.nombre + " no reúne los requisitos mínimos.");
}

