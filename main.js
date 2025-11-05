//TU PERFIL
function guardarEmail() {
  const email = document.getElementById('email').value;
  localStorage.setItem('emailUsuario', email); //guarda los datos, ya que son datos de distintas pantallas
  window.location.href = 'ingreso.html';
}

function guardarDatos() {
  const nombre = document.getElementById('nomyap').value;
  const año = document.getElementById('año').value;
  const escuela = document.getElementById('escuela').value; 
  localStorage.setItem('nombreUsuario', nombre);
  localStorage.setItem('añoUsuario', año);
  localStorage.setItem('escuelaUsuario', escuela);
  window.location.href = 'tuperfil.html';
}

document.addEventListener('DOMContentLoaded', () => { // se ejecuta cuando carga la pantalla
    const nombre = localStorage.getItem('nombreUsuario');
    const email = localStorage.getItem('emailUsuario');
    const año = localStorage.getItem('añoUsuario');
    const escuela = localStorage.getItem('escuelaUsuario');

    document.getElementById('perfil-nombre').textContent = nombre || 'No ingresado';
    document.getElementById('perfil-email').textContent = email || 'No ingresado';
    document.getElementById('perfil-año').textContent = año || 'No ingresado';
    document.getElementById('perfil-escuela').textContent = escuela || 'No ingresado';
});

function motivacion(){
  alert("¡Tú puedes!");
}

//VIDEO
function mostrarvideo() {
  document.getElementById("contenidovideo").innerHTML = `
   <iframe width="560" height="315" src="https://www.youtube.com/embed/WN_pRi27HjU?si=mfWc86Zol1qxLEum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;
}

//FAQ
function preg1(){
  alert("Porque fue creada por estudiantes, para estudiantes. Facilita organizar tareas, trabajos y exámenes de manera simple y sin estrés.");
}

function preg2(){
  alert("Solo unos minutos cada día. Con revisarla y actualizar tus tareas alcanza para organizarte mejor.");
}

function preg3(){
  alert("Somos de Mendoza, Argentina, de la Escuela de Comercio Martín Zapata, orientación Informática.");
}

function preg4(){
  alert("Sí, tiene un diseño simple, botones claros y todo está en español, pensado para estudiantes de secundaria.");
}

//TAREA Y EXAMENES
function guardar(){
  alert("Guardado correctamente")
}
