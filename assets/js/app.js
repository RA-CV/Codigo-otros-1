const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');// Corregido
const $b = document.querySelector('.blog');// Corregido
const $l = document.querySelector('.location');// Corregido

async function displayUser(username) {// Agrega async
  $n.textContent = 'cargando...';
  try {// Agregado 
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Agregado 
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
} catch (err) {// Agregado 
  handleError(err);// Agregado 
} // Agregado 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);