fetch('articulos/listado.json')
.then(res => res.json())
.then(data => {
  const cont = document.getElementById('articulos');
  data.forEach(a => {
    const card = document.createElement('div');
    card.innerHTML = `<h3>${a.titulo}</h3><img src="imagenes/${a.imagen}" width="200"><p><a href="articulos/${a.archivo}">Leer más</a></p>`;
    cont.appendChild(card);
  });
});