//Obtener parametro get exito
var url_string = window.location.href;
var url = new URL(url_string);
var valorGet = url.searchParams.get("exito");

if (valorGet == "true") {
  swal({
    title: "Exito",
    text: "Se ha procesado con exito tu peticion",
    icon: "success",
  }).then((_) => {
    window.location.href = "index.html";
  });
}


$('.php-email-form').submit((e) => {
  e.preventDefault();

  var datos = new FormData(document.getElementById("form-reserva"));
  let nombre = datos.get('name');
  let email = datos.get('email');
  let telefono = datos.get('phone');
  let fecha = datos.get('date');
  let hora = datos.get('time');
  let personas = datos.get('people');
  let mensaje = datos.get('message');

  if (nombre && email && telefono && fecha && hora && personas && mensaje) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "https://usebasin.com/f/004ae0d64d88.json");
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        swal({
          title: "Exito",
          text: "Se ha procesado con exito tu peticion",
          icon: "success",
        }).then((_) => {
          window.location.href = "index.html";
        });
      }
    }
    xhr.send(datos);
  } else {
    swal({
      title: "Error",
      text: "Ingresa bien los datos",
      icon: "error",
    });
  }
});

