document.getElementById("btn_register").addEventListener("click", registrar);
document.getElementById("btn_login").addEventListener("click", login);
//Declaramos las variables
var contenedor_formulario_login_register = document.querySelector(
  ".contenedor_formulario_login-register"
);
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var contenedor_login = document.querySelector(".contenedor_login");
var contenedor_register = document.querySelector(".contenedor_register");

function registrar() {
  formulario_register.style.display = "block";
  contenedor_formulario_login_register.style.left = "410px";
  formulario_login.style.display = "none";
  contenedor_register.style.opacity = "0";
  contenedor_loginstyle.opacity = "1";
}

function login() {
  formulario_register.style.display = "none";
  contenedor_formulario_login_register.style.left = "1px";
  formulario_login.style.display = "block";
  contenedor_register.style.opacity = "1";
  contenedor_loginstyle.opacity = "0";
}
