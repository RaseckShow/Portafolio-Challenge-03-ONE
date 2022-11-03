const boton = document.getElementById("btn-enviarFormulario");
const inputs = document.querySelectorAll("input, textarea");
const expresiones = {
  nombre: /^[a-zA-Z\s]{2,30}$/,
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  mensaje: /[\s\S]{10,180}/
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
    console.log(campo);
  }else{
    document.getElementById(`input__container__${campo}`).classList.remove("input__container-valido");
    document.getElementById(`input__container__${campo}`).classList.add("input__container-invalido");
    document.getElementById(`${campo}-error`).style.display = "flex";
    console.log(campo);
  }
}

inputs.forEach((input) => {
  input.addEventListener("blur",validarFormulario)
});