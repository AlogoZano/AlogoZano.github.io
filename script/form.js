const btn = document.getElementById('button');
const nombre = document.getElementById('from_name');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando';

   const serviceID = 'default_service';
   const templateID = 'template_hnb477t';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Informacion';
      nombre.value = '';
      email.value = '';
      asunto.value = '';
      mensaje.value = '';
    }, (err) => {
      btn.value = 'Intentar de nuevo';
    });
});