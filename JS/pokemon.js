const sectionSeleccionarAtaque = document.getElementById('seleccionarAtaque') 

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const spanMascotaJugador = document.getElementById('mascotaJugador')
const botonSeleccionar = document.getElementById('botonSeleccionar')
const contenedorAtaques = document.getElementById('contenedorAtaques')
const contenedorAtaquesEnemigo = document.getElementById('contenedorAtaquesEnemigo')
const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

const sectionSeleccionarMascota = document.getElementById('seleccionarMascota')
const sectionBotonReiniciar = document.getElementById('botonReiniciar')
const botonReiniciar = document.getElementById('botonReiniciar')

const sectionCampoBatalla = document.getElementById('campoBatalla')
const sectionMensajes = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataqueJugador')
const ataquesEnemigo = document.getElementById('ataqueEnemigo')

const spanVidasJugador = document.getElementById('vidasJugador');
const spanVidasEnemigo = document.getElementById('vidasEnemigo')

let pokemones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDePokemones
let inputBulbasaur 
let inputPikachu 
let inputCharmander 
let inputEkans  
let inputMeowth 
let inputMew 
let inputSquirtle 
let mascotaJugador
let ataquesPokemon
let ataquesPokemonEnemigo
let botonLatigo
let botonVeneno
let botonGrunido
let botonAtaqueRapido
let botonRayo
let botonTrueno
let botonLanzallamas
let botonAranazo
let botonInfierno
let botonPicotazoVeneno
let botonMordisco
let botonMalicioso
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3 
let vidasEnemigo = 3


//primero cree una clase con las caracteristicas de los pokemones
//segundo creo un array llamado Pokemones, meto todos los pokemones ahí ( variable let Pokemones=)
class Pokemon {
    constructor(nombre, descripcion, imagen, imagen2, imagenPelea, imagenBatalla, /*vida*/){
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.imagen2 = imagen2
       // this.vida = vida 
        this.imagenPelea = imagenPelea
        this.imagenBatalla =imagenBatalla
        this.ataques = []
    }
}

//creo los pokemon
let Bulbasaur = new Pokemon('Bulbasaur', 'hola', 'img/Bulbasaur_NB.gif', 'img/Bulbasaur_E.gif' , 'img/Cara_enfadada_de_Bulbasaur.png','img/Bulbasaur_NB.gif',)
let Pikachu =  new Pokemon ('Pikachu', 'hola', 'img/Pikachu_NB.gif', 'img/Pikachu_E.gif' ,'img/Cara_enfadada_de_Pikachu.png', 'img/Pikachu_E.gif',)
let Charmander = new Pokemon ('Charmander', 'hola', 'img/Charmander_NB.gif', 'img/Charmander_E.gif', 'img/Cara_enfadada_de_Charmander.png', 'img/Charmander_NB.gif',)
let Ekans  = new Pokemon ('Ekans', 'hola', 'img/Ekans_NB.gif', 'img/Ekans_E.gif' , 'img/Cara_impresionada_de_Ekans.png','img/Ekans_cristal.gif',)
//let Meowth = new Pokemon ('Meowth' , 'hola', 'img/Meowth_plata.png',)
//let Mew = new Pokemon ('Mew', 'hola', 'img/Mew_plata.png',)
//let Squirtle = new Pokemon ('Squirtle', 'holaa', '"img/Squirtle_plata.png',)

//pusheo los ataques de cada pokemon en el array ataques dentro de la clase pokemon

Bulbasaur.ataques.push(
    {nombre: 'Latigo', id:'botonLatigo'}, //'data-caracteristica': 'planta'}, //Látigo cepa causa daño y no tiene ningún efecto secundario. El movimiento tiene una potencia de 35 y 10 PP.
    {nombre: 'Veneno', id:'botonVeneno'}, //'data-caracteristica': 'veneno'}, //Polvo veneno envenena al objetivo. No afecta a Pokémon de tipo veneno, acero o con la habilidad inmunidad.
    {nombre: 'Gruñido', id:'botonGrunido'} //'data-caracteristica': 'normal'}, //Gruñido es un movimiento de sonido que baja un nivel el ataque del objetivo. En combates dobles afecta a ambos oponentes. No afecta a Pokémon con las habilidades corte fuerte, cuerpo puro, humo blanco, guardia metálica o insonorizar.

)

Pikachu.ataques.push(
    {nombre: 'Ataque Rapido', id:'botonAtaqueRapido'}, //'data-caracteristica': 'normal' //Ataque rápido causa daño y es un movimiento de alta prioridad (+1). Si el oponente no usa ningún ataque de alta prioridad, el usuario siempre atacará primero, independientemente de las velocidades del usuario y del oponente. Si el oponente también usa un ataque de aumento de prioridad +1 atacará primero el que tenga más velocidad.
    {nombre: 'Rayo', id: 'botonRayo'}, //'data-caracteristica': 'electrico'},//Rayo causa daño y tiene una probabilidad del 10% de paralizar al objetivo. Este movimiento tiene una potencia de 95.
    {nombre: 'Gruñido', id: 'botonGrunido'} //, 'data-caracteristica': 'planta'},
   // {nombre: 'Trueno', id: 'botonTrueno'}, //Trueno causa daño y tiene una probabilidad del 10% de paralizar al objetivo. El movimiento tiene una potencia de 120.
)

Charmander.ataques.push(
    {nombre: 'Lanzallamas', id:'botonLanzallamas'},// 'data-caracteristica': 'fuego'}, //Lanzallamas causa daño y tiene una probabilidad del 10% de quemar al objetivo. Lanzallamas tiene una potencia de 95.
    {nombre: 'Arañazo', id:'botonAranazo'},// 'data-caracteristica': 'arañazo'},
    {nombre: 'Infierno', id: 'botonInfierno'},// 'data-caracteristica': 'fuego'},
)

Ekans.ataques.push(
    {nombre: 'Picotazo Veneno', id: 'botonVeneno'},// 'data-caracteristica': 'veneno'}, //Picotazo veneno causa daño y tiene una probabilidad del 20% de envenenar al objetivo.
    {nombre: 'Mordisco', id: 'botonMordisco'},// 'data-caracteristica': 'siniestro'},//Mordisco es un movimiento de tipo normal que causa daño y tiene una probabilidad del 10% de amedrentar al objetivo.
    {nombre: 'Malicioso', id:'botonMalicioso'}, //'data-caracteristica': 'normal'},//Malicioso baja un nivel la defensa del objetivo. En combates dobles y triples afecta a todos los oponentes adyacentes al usuario.
)

//pusheo todos los pokemones en el array Pokemones

pokemones.push(Bulbasaur,Pikachu,Charmander,Ekans)

//creo una funcion para comenzar el juego
function iniciarJuego(){
  sectionSeleccionarAtaque.style.display = 'none';
    pokemones.forEach((Pokemon) =>{ //donde recorro cada Pokemon del array Pokemones con ForEach. 
        opcionDePokemones =` 
        <input type="radio" id=${Pokemon.nombre} name="mascota">
        <label class="" for=${Pokemon.nombre}> 
        <p>${Pokemon.nombre}</p>
        <img class="pokemon-imagen" src=${Pokemon.imagen} alt=${Pokemon.nombre} data-primera-imagen=${Pokemon.imagen} data-imagen2=${Pokemon.imagen2} >
        </label>
        ` 
         //dentro del bucle forEach creo una variable llamada OpcionDePokemones donde creo el contenido de las tarjetas de los Pokemones que voy a imprimir en HTML
//input type radio es para chequear que seleccionaste. se ve en css -- label es el texto o lo que va adentro
         contenedorTarjetas.innerHTML += opcionDePokemones  //agrego el contenido de opciondepokemones a la variable de la izquierda que imprime en html

         document.querySelectorAll('.pokemon-imagen').forEach((img) => {
            img.addEventListener('mouseover', () => {
              // Cambiar la imagen a la segunda imagen
              const segundaImagen = img.dataset.imagen2;
              img.src = segundaImagen;
            });
            
            img.addEventListener('mouseout', () => {
              // Volver a la imagen original
              const primeraImagen = img.dataset.primeraImagen;
              img.src = primeraImagen;
            });
          });

inputBulbasaur = document.getElementById('Bulbasaur')
inputPikachu = document.getElementById('Pikachu')
inputCharmander = document.getElementById('Charmander') 
inputEkans = document.getElementById('Ekans')  
inputMeowth = document.getElementById('Meowth') 
inputMew = document.getElementById('Mew') 
inputSquirtle = document.getElementById('Squirtle') 
    })

botonSeleccionar.addEventListener('click', seleccionarMascotaJugador)
sectionBotonReiniciar.style.display = 'none';

sectionCampoBatalla.style.display = 'none'
botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
  sectionSeleccionarAtaque.style.display = 'block'
  sectionSeleccionarMascota.style.display = 'none'

    if (inputBulbasaur.checked){ //CAMBIAR VAR POR LET O CONST? QUE CONVIENE MAS?
        spanMascotaJugador.innerHTML = inputBulbasaur.id
        mascotaJugador = inputBulbasaur.id
        var img = document.createElement("img");
    img.src = 'img/Cara_enfadada_de_Bulbasaur.png';
    spanMascotaJugador.appendChild(img);
    }else if(inputPikachu.checked){
        spanMascotaJugador.innerHTML = inputPikachu.id
        mascotaJugador = inputPikachu.id
        var img = document.createElement("img");
    img.src = 'img/Cara_enfadada_de_Pikachu.png';
    spanMascotaJugador.appendChild(img);
    } else if (inputCharmander.checked){
        spanMascotaJugador.innerHTML = inputCharmander.id
        mascotaJugador = inputCharmander.id
        var img = document.createElement("img");
    img.src = 'img/Cara_enfadada_de_Charmander.png';
    spanMascotaJugador.appendChild(img);
    } else if (inputEkans.checked){
        spanMascotaJugador.innerHTML = inputEkans.id
        mascotaJugador = inputEkans.id
        var img = document.createElement("img");
        img.src = 'img/Cara_impresionada_de_Ekans.png';
        spanMascotaJugador.appendChild(img);
       /* } else if (inputMeowth.checked){
            spanMascotaJugador.innerHTML = inputMeowth.id
            spanMascotaJugador = inputMeowth.id
        } else if (inputMew.checked){
            spanMascotaJugador.innerHTML = inputMew.id
            mascotaJugador = inputMew.id 
        } else if (inputSquirtle.checked) {
            inputSquirtle.innerHTML = inputSquirtle.id
            mascotaJugador = inputSquirtle.id*/
        } else {
            alert ('Selecciona un Pokemon para continuar');
            reiniciarJuego()
        }

    generarAtaquesMascota(mascotaJugador);

    const imgMascotaEspalda = document.createElement('img');
    imgMascotaEspalda.src = pokemones[mascotaJugador].imagenPelea;
    spanMascotaEnemigo.appendChild(imgMascotaEspalda);
  
    campoBatalla(pokemones[mascotaJugador].imagenBatalla)
    seleccionarMascotaEnemigo();
    }

function generarAtaquesMascota(mascotaJugador){
    let ataques 
    for (let i = 0; i < pokemones.length; i++) { //recorro array con bucle for y busco que el nombre de mascota sea igual al valor del parametro mascotaJugador
        if(mascotaJugador === pokemones[i].nombre){
            ataques = pokemones[i].ataques //si encuentro la mascota, asigno los ataques a la variable que tiene los ataques de la mascota
        }
    }
console.log(ataques)
    mostrarAtaques(ataques)
} 

function mostrarAtaques(ataques){  //recibo parametro de array ataques con info de los ataques de cada personaje
ataques.forEach((ataque) => { //recorro cada objeto ataque del arreglo ataques y dentro del ciclo creo variable
    ataquesPokemon =  //almacena una cadena de texto HTML que contiene un boton, y un ID que corresponde al ID del ataque
    `<button class="nes-btn BAtaque" id=${ataque.id}>${ataque.nombre}`
    ataquesJugador.innerHTML += ataquesPokemon //agrego el contenido al html mediante la variable contenedorAtaques, destinado a tener los botones de los ataques.
})

//creo los botones 
botonLatigo = document.getElementById('botonLatigo')
botonVeneno = document.getElementById('botonVeneno')
botonGrunido = document.getElementById('botonGrunido')
botonAtaqueRapido = document.getElementById('botonAtaqueRapido')
botonRayo = document.getElementById('botonRayo')
botonTrueno = document.getElementById('botonTrueno')
botonLanzallamas = document.getElementById('botonLanzallamas')
botonAranazo = document.getElementById('botonAranazo')
botonInfierno = document.getElementById('botonInfierno')
botonPicotazoVeneno = document.getElementById('botonPicotazoVeneno')
botonMordisco = document.getElementById('botonMordisco')
botonMalicioso = document.getElementById('botonMalicioso')
botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(){
    botones.forEach((boton) => { //itero a traves de todos los botones de ataque mediante Foreach que se invoca en el array botones
        boton.addEventListener('click', (e) =>{ //a cada boton le agrego el evento CLICK con el metodo addevent
            if (e.target.textContent === 'Latigo'){ //se verifica el texto del boton con la pr opiedad textContent
                ataqueJugador.push('Látigo') //si el texto conincide se agrega el valor al array "ataqueJugador"
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === 'Veneno'){
                ataqueJugador.push('Veneno')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === 'Gruñido'){
                ataqueJugador.push('Gruñido')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === 'Ataque Rapido'){
                ataqueJugador.push('Ataque rápido')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === 'Rayo'){
                ataqueJugador.push('Rayo')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }  else if (e.target.textContent === 'Trueno'){
                ataqueJugador.push('Trueno')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }  else if (e.target.textContent === 'Lanzallamas'){
                ataqueJugador.push('Lanza llamas')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }  else if (e.target.textContent === 'Arañazo'){
                ataqueJugador.push('Arañazo')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }  else if (e.target.textContent === 'Infierno'){
                ataqueJugador.push('Infierno')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true 
            }  else if (e.target.textContent === 'Picotazo Veneno'){
                ataqueJugador.push('Picotazo Veneno')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }  else if (e.target.textContent === 'Mordisco'){
                ataqueJugador.push('Mordisco')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else { 
                ataqueJugador.push('Malicioso')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }

    ataqueAleatorioEnemigo();
            })
    })
}

function seleccionarMascotaEnemigo (){
    let mascotaAleatorio = aleatorio (0, pokemones.length -1) //genero un num aleatorio entre 0 y la longitud de la lista de pokemones mediante la funcion "aleatorio"
    spanMascotaEnemigo.innerHTML = pokemones[mascotaAleatorio].nombre
    ataquesPokemonEnemigo = pokemones[mascotaAleatorio].ataques

  const imgMascotaEnemigo = document.createElement('img');
  imgMascotaEnemigo.src = pokemones[mascotaAleatorio].imagenPelea;
  spanMascotaEnemigo.appendChild(imgMascotaEnemigo);

  campoBatalla(pokemones[mascotaAleatorio].imagenBatalla)

  for(let i = 0; i < ataquesPokemonEnemigo.length; i++){
    let ataque = ataquesPokemonEnemigo[i];
    let ataqueElemento = document.createElement('p');
    ataqueElemento.textContent = `${ataque.nombre}`
   contenedorAtaquesEnemigo.appendChild(ataqueElemento)
   
    console.log(ataquesPokemonEnemigo[i].nombre);
}
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesPokemonEnemigo.length-1)
    ataqueEnemigo.push(ataquesPokemonEnemigo[ataqueAleatorio].nombre) //agrego el nombre del ataque aleatorio del array ataquesPokemon al array Ataqueenemigo usando push
    ataquesPokemonEnemigo.splice(ataqueAleatorio,1)  //remuevo el ataque aleatorio del array ataquesPokemonEnemigo usando el metodo splice
    console.log(ataqueEnemigo)
    iniciarPelea()
}

/*function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesPokemonEnemigo.length -1)
   
    if (ataqueAleatorio == 0){
     ataqueEnemigo.push(ataquesPokemonEnemigo[0].nombre);
    } else if (ataqueAleatorio == 1) {
        ataqueEnemigo.push(ataquesPokemonEnemigo[1].nombre);
    } else if (ataqueAleatorio == 2) {
      ataqueEnemigo.push(ataquesPokemonEnemigo[2].nombre);
    } else {
      ataqueEnemigo.push(ataquesPokemonEnemigo[ataqueAleatorio].nombre);
    }
    console.log(ataqueEnemigo)
   //iniciarPelea()
   }*/


/*function ataqueAleatorioEnemigo() {
    const numAtaques = ataquesPokemonEnemigo.length;
    const indiceAtaque = Math.floor(Math.random() * numAtaques);
  
    if (indiceAtaque === 0) {
      ataqueEnemigo.push(ataquesPokemonEnemigo[0].nombre);
    } else if (indiceAtaque === 1) {
        ataqueEnemigo.push(ataquesPokemonEnemigo[1].nombre);
    } else if (indiceAtaque === 2) {
      console.log(ataquesPokemonEnemigo[2].nombre);
    } else {
      ataqueEnemigo.push(ataquesPokemonEnemigo[indiceAtaque].nombre);
    }
    console.log(ataqueEnemigo)
  }*/
/*function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio (0,ataquesPokemonEnemigo.length -1)
console.log(ataqueAleatorio)
    if (ataqueAleatorio === botonLatigo) {
        ataqueEnemigo.push('LATIGO')
    } else if(ataqueAleatorio === botonVeneno){
        ataqueEnemigo.push('Veneno')
    } else if(ataqueAleatorio === botonGrunido){
        ataqueEnemigo.push('Gruñido')
    } else if(ataqueAleatorio === botonAtaqueRapido){
        ataqueEnemigo.push('Ataque Rápido')
    } else if(ataqueAleatorio === botonRayo){
            ataqueEnemigo.push('Rayo')
        } else if(ataqueAleatorio === botonTrueno){
            ataqueEnemigo.push('Trueno')
        } else if(ataqueAleatorio === botonLanzallamas){
            ataqueEnemigo.push('Lanza Llamas')
            } else if(ataqueAleatorio === botonAranazo){
                ataqueEnemigo.push('Arañazo')
            } else if(ataqueAleatorio === botonInfierno){
                ataqueEnemigo.push('Infierno')
            } else if(ataqueAleatorio === botonPicotazoVeneno){
                    ataqueEnemigo.push('Picotazo Veneno')
            } else if (ataqueAleatorio === botonMordisco){
                ataqueEnemigo.push('Mordisco')
            } else {
                ataqueEnemigo.push ('Malicioso')
            }
                console.log(ataqueEnemigo)
                iniciarPelea()
}*/

function iniciarPelea(){ 
    if(ataqueJugador.length === 3){
      combate()
      sectionSeleccionarAtaque.style.display = 'none' 
      sectionMensajes.style.display = 'none'
      sectionCampoBatalla.style.display = 'block'

   //  agregarImagenCampoBatalla(); //ESTOY TRABAJANDO EN ESTA LINEA 13/5
// campoBatalla(); 
}
}

function campoBatalla(imagenPokemonEnemigo, imagenPokemonEspalda) {
const contenedorImagen = document.createElement('div');
contenedorImagen.classList.add('contenedor-imagen');

const imagenFondo = document.createElement('img');
imagenFondo.src = 'img/Campo_de_batalla_DPPt_6.png';

/*const imagenSuperpuesta = document.createElement('img');
imagenSuperpuesta.src = 'img/Cara_enfadada_de_Bulbasaur.png';
//imagenSuperpuesta.alt = 'Imagen superpuesta';*/

const imagenPokemonEnemigoElemento = document.createElement('img')
imagenPokemonEnemigoElemento.src = imagenPokemonEnemigo;

const imagenPokemonEspaldaElemento = document.createElement('img')
imagenPokemonEspaldaElemento.src = imagenPokemonEspalda;

contenedorImagen.appendChild(imagenFondo);
contenedorImagen.appendChild(imagenPokemonEnemigoElemento);
contenedorImagen.appendChild(imagenPokemonEspalda);
sectionCampoBatalla.appendChild(contenedorImagen);
}

function campoBatallaJugador(imagenPokemonEspalda){
    const imagenEspaldaJugador = document.createElement('img');
imagenEspaldaJugador.scr = imagenPokemonEspalda
contenedorImagen.appendChild(imagenEspaldaJugador);
sectionCampoBatalla.appendChild(contenedorImagen)

}

  /*function agregarImagenCampoBatalla() {
    var img = document.createElement("img");
    img.src = 'img/Campo_de_batalla_DPPt_6.png';
    sectionCampoBatalla.appendChild(img)
  }*/

  function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
  }

function combate(){
   

  for (let index = 0; index < ataqueJugador.length; index++) {
     // console.log(ataqueJugador[index])    
   if(ataqueJugador[index] === ataqueEnemigo[index]){
        indexAmbosOponentes(index,index)
        crearMensaje('EMPATE')
      } else if ((ataqueJugador[index] == 'Latigo' && ataqueEnemigo[index] == 'Rayo') || 
      (ataqueJugador == 'Veneno' && ataqueEnemigo[index] == 'Gruñido') ||
       (ataqueJugador[index] == 'Gruñido' && ataqueEnemigo[index] == 'Infierno'))
      { indexAmbosOponentes(index,index)
        crearMensaje("Ganaste")
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
      } else {
        indexAmbosOponentes(index, index)
        crearMensaje ('PERDISTE')
    victoriasEnemigo++
  spanVidasEnemigo.innerHTML = victoriasEnemigo}
  revisarVidas()
  }
}
  
    
      function revisarVidas(){
        if (victoriasJugador === victoriasEnemigo){
          crearMensajeFinal ('EMPATE!');
        } else if (victoriasJugador > victoriasEnemigo){
          crearMensajeFinal ('FELICIDADES! GANASTE 😊')
        } else{
          crearMensajeFinal('Lo siento, perdiste😢')
        }
      }

      function crearMensaje(resultado){

        let nuevoAtaqueJugador = document.createElement('p')
        let nuevoAtaqueEnemigo = document.createElement('p')
        
        sectionMensajes.innerHTML = resultado
        nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
        nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
      
        ataquesJugador.appendChild(nuevoAtaqueJugador)
        ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
      } 
      
      function crearMensajeFinal(resultadoFinal){
       
        let parrafo = document.createElement('p')
        parrafo.innerHTML = resultadoFinal
        sectionMensajes.appendChild(parrafo)
      
      
        sectionBotonReiniciar.style.display = 'block'
      } 

      function reiniciarJuego (){
        location.reload()
      }

function aleatorio (min,max){
    return Math.floor (Math.random() * (max - min + 1) + min) //genera un número entero aleatorio entre un valor mínimo y un valor máximo que se le pasan como argumentos.
}
window.addEventListener('load', iniciarJuego) //IMPORTANTE, carga todo el dom antes de que la pagina termine de cargarse (a chequear si es así)





