//Haz tú validación en javascript acá
const inputs = document.querySelectorAll('input, textarea');
const tipoError = ['valueMissing','typeMismatch','patternMismatch','customError',];
const msjErrores = {
  nombre: {
    valueMissing: 'Este campo no puede estar vacio',
  },
  email: {
    valueMissing: 'Este campo no puede estar vacio',
    patternMismatch: 'Ejemplo correo: nombre@email.com',
  },
  asunto: {
    valueMissing: 'Este campo no puede estar vacio',
  },
  mensaje: {
    valueMissing: 'Este campo no puede estar vacio',
  },
};

function mostrarMsjError(tipoDeInput, input) {
  let msj = ''
  tipoError.forEach(e => {
    if(input.validity[e]){
      msj = msjErrores[tipoDeInput][e];
    }
  })
  return msj  
}
function validar(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove('error-placeholder')
    input.parentElement.querySelector('.error-msj').innerHTML = '';
  } else {
    input.parentElement.classList.add('error-placeholder')
    input.parentElement.querySelector('.error-msj').innerHTML = mostrarMsjError(tipoDeInput,input);
  }
};


inputs.forEach(input => {
  input.addEventListener('blur', (input) => {
    validar(input.target)
  })
});


