let sitiosGlobal = [];

fetch('data/sitios.json')
  .then(response => response.json())
  .then(data => {
    sitiosGlobal = data;
    mostrarSitios(data);
  });

function mostrarSitios(data) {
  const contenedor = document.getElementById('sitios');
  contenedor.innerHTML = "";

  data.forEach(sitio => {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
      <h2>${sitio.nombre}</h2>
      <p>${sitio.descripcion}</p>
      <img src="${sitio.imagen}">
    `;

    contenedor.appendChild(div);
  });
}

function filtrar() {
  const texto = document.getElementById('buscador').value.toLowerCase();

  const filtrados = sitiosGlobal.filter(sitio =>
    sitio.nombre.toLowerCase().includes(texto)
  );

  mostrarSitios(filtrados);
}