const formulario = document.getElementById("form-nueva-carta");
const galeria = document.getElementById("galeria-cartas");
const inputNombre = document.getElementById("nombre-carta");
const selectCategoria = document.getElementById("categoria-carta");

formulario.addEventListener("submit", function(evento)  {
    evento.preventDefault();
    const nombre = inputNombre.value;
    const categoria = selectCategoria.value;
    const nuevaCarta = document.createElement("article");
    nuevaCarta.classList.add("carta-item");
    nuevaCarta.dataset.categoria = categoria;
    nuevaCarta.innerHTML = `
        <h3>${nombre}</h3>
        <p>Rareza: <strong>${categoria}</strong></p>
        <button class="btn-eliminar">Borrar carta</button>
    `;
    galeria.appendChild(nuevaCarta);
    formulario.reset();
});