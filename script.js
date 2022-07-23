const nosotros = document.querySelector('.nosotros');
const ellos  = document.querySelector('.ellos');
const suman = document.querySelector('.suman');
const restan = document.querySelector('.restan');
const sumae = document.querySelector('.sumae');
const restae = document.querySelector('.restae');
const refresh = document.querySelector('.refresh');

let contadorNosotros = (localStorage.getItem('nosotros') === null) ? 0 : parseInt(window.localStorage.getItem('nosotros'));
let contadorEllos = (localStorage.getItem('ellos') === null) ? 0 : parseInt(window.localStorage.getItem('ellos'));
nosotros.innerHTML = `${contadorNosotros}`;
ellos.innerHTML = `${contadorEllos}`;

// Funciones para sumar
function sumaNosotros() {
  if (contadorNosotros < 30) {
  contadorNosotros += 1;
  nosotros.innerHTML = `${contadorNosotros}`;
  localStorage.setItem('nosotros', contadorNosotros);
  }
}

function sumaEllos() {
  if (contadorEllos < 30) {
  contadorEllos += 1;
  ellos.innerHTML = `${contadorEllos}`;
  localStorage.setItem('ellos', contadorEllos);
  }
}

// Funciones para restar
function restaNosotros(){
  if (contadorNosotros >= 1) {
  contadorNosotros -= 1;
  nosotros.innerHTML = `${contadorNosotros}`;
  localStorage.setItem('nosotros', contadorNosotros)
  }
}

function restaEllos() {
  if (contadorEllos >=1) {
  contadorEllos -= 1;
  ellos.innerHTML = `${contadorEllos}`;
  localStorage.setItem('ellos', contadorEllos);
  }
}

function restart() {
  contadorNosotros = 0
  contadorEllos = 0;
  nosotros.innerHTML = `${contadorNosotros}`;
  ellos.innerHTML = `${contadorEllos}`;
  localStorage.setItem('nosotros', contadorNosotros)
  localStorage.setItem('ellos', contadorEllos)
};


suman.addEventListener('click', sumaNosotros);
sumae.addEventListener('click', sumaEllos);
restan.addEventListener('click', restaNosotros);
restae.addEventListener('click', restaEllos);
refresh.addEventListener('click', restart);





