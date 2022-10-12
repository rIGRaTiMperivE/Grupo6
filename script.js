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

