// ===== 1. CONTADOR =====
// Variable que guarda el valor actual; "let" porque su valor va a cambiar. Empieza en 0
let cuenta = 0;
// Busca en el HTML el elemento con id="numero" y lo guarda; "const" porque la referencia no cambia
const numero = document.getElementById("numero");

// Función que actualiza lo que se ve en pantalla
function mostrar() {
  // textContent cambia el texto del elemento: escribe el valor de "cuenta"
  numero.textContent = cuenta;
// Fin de la función
}

// Busca el botón "Sumar" y le asigna un "oyente": se ejecuta cada vez que se hace clic
document.getElementById("btnSumar").addEventListener("click", () => {
  // Aumenta la cuenta en 1 (equivale a cuenta = cuenta + 1)
  cuenta++;
  // Actualiza el número que se ve en pantalla
  mostrar();
// Fin del oyente del botón Sumar
});

// Busca el botón "Restar" y escucha sus clics
document.getElementById("btnRestar").addEventListener("click", () => {
  // Disminuye la cuenta en 1 (equivale a cuenta = cuenta - 1)
  cuenta--;
  // Actualiza el número que se ve en pantalla
  mostrar();
// Fin del oyente del botón Restar
});

// Busca el botón "Reiniciar" y escucha sus clics
document.getElementById("btnReiniciar").addEventListener("click", () => {
  // Vuelve la cuenta a 0
  cuenta = 0;
  // Actualiza el número que se ve en pantalla
  mostrar();
// Fin del oyente del botón Reiniciar
});

// ===== 2. FORMULARIO =====
// Guarda el formulario completo (id="formSaludo")
const form = document.getElementById("formSaludo");
// Guarda el campo de texto donde se escribe el nombre
const inputNombre = document.getElementById("nombre");
// Guarda el espacio vacío donde se mostrará la alerta
const resultado = document.getElementById("resultado");

// Escucha el evento "submit" (cuando se envía el formulario); "evento" trae información de lo ocurrido
form.addEventListener("submit", (evento) => {
  // Evita el comportamiento normal del formulario (recargar la página)
  evento.preventDefault(); // evita que la página se recargue

  // Lee lo escrito en el campo; trim() quita los espacios al inicio y al final
  const nombre = inputNombre.value.trim();

  // Si el campo quedó vacío...
  if (nombre === "") {
    // Agrega la clase is-invalid de Bootstrap: pone el borde rojo y muestra el mensaje de error
    inputNombre.classList.add("is-invalid"); // clase de Bootstrap
    // Borra cualquier alerta anterior
    resultado.innerHTML = "";
    // Sale de la función: no se ejecuta nada de lo que sigue
    return;
  // Fin del if
  }

  // Si sí escribió algo, quita el estado de error del campo
  inputNombre.classList.remove("is-invalid");

  // Alerta de Bootstrap creada con JavaScript
  // Crea un nuevo elemento <div> en memoria (todavía no se ve)
  const alerta = document.createElement("div");
  // Le pone las clases de Bootstrap: alert = caja de alerta, alert-success = color verde
  alerta.className = "alert alert-success";
  // Escribe el mensaje; las comillas invertidas (``) permiten insertar la variable con ${nombre}
  alerta.textContent = `¡Bienvenido(a) al SENA, ${nombre}! 🎉`;
  // Reemplaza lo que hubiera en "resultado" por la nueva alerta, y así se muestra en pantalla
  resultado.replaceChildren(alerta);

  // Vacía el campo de texto para que quede listo para otro nombre
  form.reset();
// Fin del oyente del formulario
});

// ===== 3. CÓDIGO QR =====
// Dirección del proyecto publicado en GitHub Pages (el QR apunta a ella)
const URL_GITHUB = "https://senavisitas-blip.github.io/proyecto-sena/";

// Crea el QR: tipo 0 = tamaño automático, "H" = máxima corrección de errores
const qr = qrcode(0, "H");
// Agrega la URL como dato
qr.addData(URL_GITHUB);
// Calcula el dibujo
qr.make();
// Dibuja el QR como imagen dentro de la caja con id="qrcode" (cada cuadrito de 4 px, sin margen extra)
document.getElementById("qrcode").innerHTML = qr.createImgTag(4, 0);
// Texto alternativo para accesibilidad
document.querySelector("#qrcode img").alt = "Código QR de " + URL_GITHUB;
