// /js/edad.js
// Uso opcional: evalúa edad desde un input en cualquier página.
window.evaluarEdad = function() {
  const v = parseInt(document.getElementById("edadInput").value, 10);
  const msg = isNaN(v) ? "Edad inválida" : (v > 20 ? "Es mayor" : "Es menor");
  document.getElementById("edadOut").textContent = msg;
};
