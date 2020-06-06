$(".navbar-nav .nav-item").click(function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

$("#contact-form").submit(function validateForm() {
  var valid = 1;
  var email = document.getElementById("emailForm");
  var email_validation = document.getElementById("email_validation");
  var name = document.getElementById("nameForm");
  var name_validation = document.getElementById("name_validation");
  var message = document.getElementById("textForm");
  var message_validation = document.getElementById("message_validation");
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name.value === "") {
    valid = 0;
    name_validation.innerHTML = "Campo requerido";
    name_validation.style.display = "block";
    name_validation.parentNode.style.backgroundColor = "#FFDFDF";
  } else {
    name_validation.style.display = "none";
    name_validation.parentNode.style.backgroundColor = "transparent";
  }

  if (message.value === "") {
    valid = 0;
    message_validation.innerHTML = "Campo requerido";
    message_validation.style.display = "block";
    message_validation.parentNode.style.backgroundColor = "#FFDFDF";
  } else {
    message_validation.style.display = "none";
    message_validation.parentNode.style.backgroundColor = "transparent";
  }

  if (email.value === "") {
    valid = 0;
    email_validation.innerHTML = "Campo requerido";
    email_validation.style.display = "block";
    email_validation.parentNode.style.backgroundColor = "#FFDFDF";
  } else {
    email_validation.style.display = "none";
    email_validation.parentNode.style.backgroundColor = "transparent";
  }

  if (!filter.test(email.value)) {
    valid = 0;
    email_validation.innerHTML = "Dirección de email incorrecta";
    email_validation.style.display = "block";
    email_validation.parentNode.style.backgroundColor = "#FFDFDF";
  } else {
    email_validation.style.display = "none";
    email_validation.parentNode.style.backgroundColor = "transparent";
  }
  if (!valid) return false;
  swal({
    title: "Mensaje enviado con éxito",
    text: "Muchas gracias por comunicarte con nosotros",
    type: "success",
    timer: 3000,
  });
});

// $("#contact-form").submit(function(){
//     swal ({
//       title:'Mensaje enviado con éxito',
//       text: 'Muchas gracias por comunicarte con nosotros',
//       type: 'success',
//       timer: 3000,
//     });
// })
