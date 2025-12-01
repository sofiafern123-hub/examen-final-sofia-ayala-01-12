// /js/formulario_matriculacion.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formMat");
  const out = document.getElementById("matRes");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(form);
    const datos = Object.fromEntries(fd.entries());
    out.innerHTML = `
      <div class="card">
        <h3>Matriculación enviada</h3>
        <p><strong>Nombre:</strong> ${datos.nombre} ${datos.apellido}</p>
        <p><strong>Documento:</strong> ${datos.doc}</p>
        <p><strong>Curso:</strong> ${datos.curso}</p>
      </div>`;
    form.reset();
  });
});
