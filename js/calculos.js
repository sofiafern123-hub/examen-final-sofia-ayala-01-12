// /js/calculos.js
function calcular() {
  const a = parseFloat(document.getElementById("numA").value);
  const b = parseFloat(document.getElementById("numB").value);
  if (isNaN(a) || isNaN(b)) { alert("Ingrese números válidos"); return; }
  document.getElementById("resSuma").textContent = a + b;
  document.getElementById("resResta").textContent = a - b;
  document.getElementById("resMultip").textContent = a * b;
  document.getElementById("resDiv").textContent = b === 0 ? "No se puede dividir por 0" : (a / b).toFixed(2);
}
window.calcular = calcular;
