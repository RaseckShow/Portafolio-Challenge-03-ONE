
const inputs = document.querySelectorAll("input, textarea");
const expresiones = {
  nombre: /^[a-zA-Z\s]{2,30}$/,
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  mensaje: /[\s\S]{10,180}/
};

const validarFormulario = (e) =>{
  switch(e.target.name){
    case "nombre":
      if(expresiones.nombre.test(e.target.value)){
        document.getElementById("input__container__nombre").classList.remove("input__container-invalido");
        document.getElementById("input__container__nombre").classList.add("input__container-valido");
        document.getElementById("nombre-error").style.display = "none";
      }else{
        document.getElementById("input__container__nombre").classList.remove("input__container-valido");
        document.getElementById("input__container__nombre").classList.add("input__container-invalido");
        document.getElementById("nombre-error").style.display = "flex";
      }
    break;
    case "email":
      if(expresiones.email.test(e.target.value)){
        document.getElementById("input__container__email").classList.remove("input__container-invalido");
        document.getElementById("input__container__email").classList.add("input__container-valido");
        document.getElementById("email-error").style.display = "none";

      }else{
        document.getElementById("input__container__email").classList.remove("input__container-valido");
        document.getElementById("input__container__email").classList.add("input__container-invalido");
        document.getElementById("email-error").style.display = "flex";
      }
    break;
    case "mensaje":
      if(expresiones.mensaje.test(e.target.value)){
        document.getElementById("input__container__mensaje").classList.remove("input__container-invalido");
        document.getElementById("input__container__mensaje").classList.add("input__container-valido");
        document.getElementById("mensaje-error").style.display = "none";
      }else{
        document.getElementById("input__container__mensaje").classList.remove("input__container-valido");
        document.getElementById("input__container__mensaje").classList.add("input__container-invalido");
        document.getElementById("mensaje-error").style.display = "flex";
      }
    break;
  }
}

inputs.forEach((input) => {
  input.addEventListener("blur",validarFormulario)
});


/*
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
  
    if(input.validity.valid)
    {
      input.parentElement.classList.remove("input__container-invalido");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else
    {
      input.parentElement.classList.add("input__container-invalido");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }

  
  
  const tiposDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
  ]
  
  const mensajesError = {
    nombre: {
      valueMissing: "Este campo no puede estar vacio",    
    }, 
    email: {
      valueMissing: "Este campo no puede estar vacio",    
      typeMismatch: "El correo ingresado no es valido",    
    },
    mensaje: {
      valueMissing: "Este campo no puede estar vacio",   
      patternMismatch: "El mensaje debe tener maximo 120 caracteres",
    }
  }
  
  
  function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tiposDeError.forEach((error) => {
      if(input.validity[error]){
        console.log(tipoDeInput,error);
        console.log(input.validity[error]);
  
        console.log(mensajesError[tipoDeInput][error]);
  
        mensaje = mensajesError[tipoDeInput][error];
      } 
    });
    return mensaje;
  }
  */