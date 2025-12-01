// /js/bienvenida.js
document.addEventListener("DOMContentLoaded", () => {
  const nombre = prompt("Ingrese su nombre:");
  const apellido = prompt("Ingrese su apellido:");
  const edadStr = prompt("Ingrese su edad:");
  const edad = parseInt(edadStr, 10);

  const saludoEl = document.getElementById("saludo");
  if (!saludoEl) return;

  if (!nombre || !apellido || isNaN(edad)) {
    saludoEl.textContent = "Bienvenida/o. Complete los datos correctamente para personalizar su experiencia.";
    return;
  }
  const estado = edad > 20 ? "Es mayor" : "Es menor";
  saludoEl.innerHTML = `Hola ${nombre} ${apellido}. ${estado}`;
});
