/* let miNombre = "Hugo" 

let mensajeBienvenida = "Hola hoy vemos JS perrooo"

//console.log("Hola hoy vemos JS")

console.log(mensajeBienvenida)

miNombre = 'Hugo Hernan'

console.log(miNombre)

const miApellido = "Smahlij"

let miEdad = 26

let esMayor = true

console.log(miEdad)

let numeroUno = 10
let numeroDos = 5

let resultado = numeroUno / numeroDos

console.log(resultado)

console.log(miNombre + " " + miApellido)

let nombreUsuario = prompt( 'Ingrese su nombre' )

console.log(nombreUsuario) */

let miNombre = "Hugo"

let miApellido = "Smahlij"

let miEdad = 26

let miMascota = "Fermin"

let edadMascota = 7

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

let nombreCompleto = miNombre + " " + miApellido

let textoPresentacion = "Hola mi nombre es" + " " + nombreCompleto + " " + "tengo" + " " + miEdad + " " + "años" + "," + " " + "mi mascota se llama" + " " + miMascota + " " + "y tiene" + " " + edadMascota + " " + "años."

console.log(textoPresentacion)

let sumaEdades = miEdad + edadMascota
let restaEdades = edadMascota + miEdad
let productoEdades = edadMascota * miEdad
let divisionEdad = miEdad / edadMascota

console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdad)

let nombreUsuario = prompt("Ingrese su nombre")
let apellidoUsuario = prompt("Ingrese su apellido")
let edadUsuario = Number(prompt("Ingrese su edad"))
let mascotaUsuario = prompt("Ingrese el nombre de su mascota")
let edadMascotaUsuario = prompt("Ingrese la edad de su mascota")

console.log(nombreUsuario)
console.log(apellidoUsuario)
console.log(edadUsuario)
console.log(mascotaUsuario)
console.log(edadMascotaUsuario)

let alumno = { 
    nombre: "Hugo",
    apellido: "Smahlij",
    edad: 26,
    sexo: "masculino",
    carrera: "medicina"
}

console.table(alumno)

console.table(alumno.nombre)
console.table(alumno.apellido)
console.table(alumno.edad)
console.table(alumno.sexo)
console.table(alumno.carrera)

let mascota = { 
    nombre: "Fermin",
    raza: "Criollo",
    edad: 7,
    sexo: "Masculino",
    color: "Naranja"
}

console.table(mascota)

console.table(mascota.edad)
console.table(mascota.raza)
console.table(mascota.sexo)
console.table(mascota.nombre)
console.table(mascota.color)

let frutas = ["manzana", "pera", "kiwi", "naranja", "banana"]

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let numeros = [1, 2, 3, 4, 5]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia = ["Hugo", "Matias", "Hugui", "Fermin", "Annie", "Chuleta"]

console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])
console.log(familia[5])

let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4]

console.log(textoAleatorio)