const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("input, textarea");

const expresiones = {
  nombre: /^[a-zA-Z\s]{2,30}$/,
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  mensaje: /[\s\S]{10,180}/
};

const campos = {
  nombre: false,
  email: false,
  mensaje: false
};

const validarFormulario = (e) =>{
  switch(e.target.name){
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
    break;
    case "email":
      validarCampo(expresiones.email, e.target, "email");
    break;
    case "mensaje":
      validarCampo(expresiones.mensaje, e.target, "mensaje");
    break;
  }
}
const validarCampo = (expresion, input, campo) =>{
  if(expresion.test(input.value)){
    document.getElementById(`input__container__${campo}`).classList.remove("input__container-invalido");
    document.getElementById(`input__container__${campo}`).classList.add("input__container-valido");
    document.getElementById(`${campo}-error`).style.display = "none";
    campos[campo] = true;
  }else{
    document.getElementById(`input__container__${campo}`).classList.remove("input__container-valido");
    document.getElementById(`input__container__${campo}`).classList.add("input__container-invalido");
    document.getElementById(`${campo}-error`).style.display = "flex";
    campos[campo] = false;
  }
}

inputs.forEach((input) => {
  input.addEventListener("blur",validarFormulario)
});

formulario.addEventListener("submit", (e) =>{
  e.preventDefault();
  if(campos.nombre && campos.email && campos.mensaje){
    formulario.reset();
  
    document.getElementById("mensaje__envioCorrecto").classList.add("mensaje__envioCorrecto-activo");
    setTimeout(() =>{
      document.getElementById("mensaje__envioCorrecto").classList.remove("mensaje__envioCorrecto-activo");
    }, 2500);
  }
});