let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/* Declaración de función del boton de intento del usuario */
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
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
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeros);

    if (listaNumeros.length == numeroMaximo) {
        asignarTextoElemento('p', 'Se han agotado los números disponibles');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    } else {
        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesInciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();

    //Restaurar las condiciones iniciales
    condicionesInciales();

    //Deshabilitar el botón de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesInciales();