// /js/formulario_prueba.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPrueba");
  const out = document.getElementById("pruebaRes");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(form);
    out.textContent = `Formulario enviado: ${fd.get("nombre")} - ${fd.get("email")}`;
    form.reset();
  });
});
