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
  contenedor_login.style.opacity = "1";
}

function login() {
  formulario_register.style.display = "none";
  contenedor_formulario_login_register.style.left = "1px";
  formulario_login.style.display = "block";
  contenedor_register.style.opacity = "1";
  contenedor_login.style.opacity = "0";
}

/*esta es la logica del register*/

const btn_registro = document.querySelector('#registrarme');
const formulario_registro = document.querySelector('#formulario_registro');

const guardardatos = () => {
  const datos = new FormData(formulario_registro);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
};

/*guardar datos en el servidor*/
const postData = async () => {
  const nuevousuario = guardardatos();
  try {
    const response = await fetch("http://localhost:3000/usuarios", {
      method: 'POST',
    /*especifica el tipo de informacion (JSON)*/
    headers: {'Content-Type': 'application/json'},
    /*coloca la informacion en el formato JSON */
    body: JSON.stringify(nuevousuario)
    });

    if (response.ok) {
      const jsonrespuesta = await response.json();
      const { nombre, email, usuario, contrasena } = jsonrespuesta;
    }
  } catch (error) {
    console.log(error);
  }
}

btn_registro.addEventListener('click', (event) => {
  event.preventDefault();
  postData();
  
})

/*el login de la pagina*/
/*const url='http://localhost:3000/usuarios';

const emaillogin= document.querySelector('#emaillogin');
const contrasena= document.querySelector('#Contraseñalogin');
const btn_iniciar= document.querySelector('#btn_iniciar');

const  funlogin = async () =>{
  const busqueda=emaillogin.value;
  const endpoint = `${url}${busqueda}`;

  try{
    const respuestaemail = await fetch(endpoint, {cache: 'no-cache'});
    if(respuestaemail.ok){
      const jsonrespuesta= await respuestaemail.json();

      muestraResultados(jsonrespuesta);

      

   
    }

  }catch(e){
    console.log(e);

  }
}*/

const url='http://localhost:3000/usuarios';



const emaillogin= document.querySelector('#emaillogin');
const Contraseñalogin= document.querySelector('#Contraseñalogin');
btn_iniciar.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('http://localhost:3000/usuarios')
  .then((res)=>res.json())
  .then((data) => {
   let r=data.find((item)=>{
    if(item.email == emaillogin.value){
      if(item.contrasena == Contraseñalogin.value){
        location.href='index.html';
      }
      
      

    }
    
   });
   
  
    
  } );
});


/*location.href='index.html';*/
/*btn_iniciar.addEventListener('click',funlogin);*/

//Funcion para mostrar el resultado

const muestraResultados = (res) => {    
  const correro = res[0].usuario;
  console.log(correro);
  
  
  }