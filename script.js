document.addEventListener("DOMContentLoaded" , function(){

    document.getElementById("formulario").addEventListener('submit' , validacion);
});



const validacion = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('nombres').value;
  const direcciónEmail = document.getElementById('correo').value;
  if (nombres.value === "") {
    alert("Por favor, escribe tu nombre.");
    nombres.focus();
    return false;
  }
    
  if (correo.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    correo.focus();
    return false;
  }

  if (!emailValido(correo.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    correo.focus();
    return false;
  }
  
  return true; 
}

const emailValido = correo => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}


// API
let url = 'https://my-json-server.typicode.com/rIGRaTiMperivE/PruebaGit/destinos'
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

  const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for(let i = 0 ; i < data.length ;i++){
      body += `<tr><td>${data[i].id}</td><td>${data[i].pais}</td><td>${data[i].ciudad}</td><td>${data[i].fecha}</td><td>${data[i].evento}</td></tr>`

    }
    document.getElementById('data').innerHTML = body    

  }