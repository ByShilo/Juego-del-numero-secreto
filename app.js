let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroUsuario === numeroSecreto) {
       //cuando acierta
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
       document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else { 
        //Cuando el numero es menor
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            //cuando el numero es mayor
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
}
 return;   
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
   //si ya se generaron todos los numeros
   if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

   } else {
   if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
   } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`)
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    //limpiar caja de texto
    limpiarCaja();
    //mensaje de numeros
    condicionesIniciales();
    //generar numero aleatorio
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   
}
 condicionesIniciales();

