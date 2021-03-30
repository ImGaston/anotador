const nosotros = document.querySelector('.nosotros');
const ellos  = document.querySelector('.ellos');
const suman = document.querySelector('.suman');
const restan = document.querySelector('.restan');
const sumae = document.querySelector('.sumae');
const restae = document.querySelector('.restae');
const refresh = document.querySelector('.refresh');
let contadorNosotros = 0;
let contadorEllos = 0;

// Funciones para sumar
function sumaNosotros() {
  if (contadorNosotros < 30) {
  contadorNosotros += 1;
  nosotros.innerHTML = `${contadorNosotros}`;
  }
}

function sumaEllos() {
  if (contadorEllos < 30) {
  contadorEllos += 1;
  ellos.innerHTML = `${contadorEllos}`;
  }
}

// Funciones para restar
function restaNosotros(){
  if (contadorNosotros >= 1) {
  contadorNosotros -= 1;
  nosotros.innerHTML = `${contadorNosotros}`;
  }
}

function restaEllos() {
  if (contadorEllos >=1) {
  contadorEllos -= 1;
  ellos.innerHTML = `${contadorEllos}`;
  }
}

function restart() {
  ellos.innerHTML = `${0}`;
  nosotros.innerHTML = `${0}`;
  contadorEllos = 0;
  contadorNosotros = 0
};


suman.addEventListener('click', sumaNosotros);
sumae.addEventListener('click', sumaEllos);
restan.addEventListener('click', restaNosotros);
restae.addEventListener('click', restaEllos);
refresh.addEventListener('click', restart);





