/* ENFERMERÍA */
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".etiquetaA")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modalContenedor")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
})

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },850)
})

window.addEventListener("click",function(e){
    console.log(e.target)
    if(e.target == modalC){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },900)
    }
})

/* CONTABILIDAD */
let cerrarContabilidad = document.querySelectorAll(".closeContador")[0];
let abrirContabilidad = document.querySelectorAll(".etiquetaContador")[0];
let modal2 = document.querySelectorAll(".modalContador")[0];
let modalContabilidad = document.querySelectorAll(".modalContenedorContador")[0];

abrirContabilidad.addEventListener("click", function(i){
    i.preventDefault();
    modalContabilidad.style.opacity = "1";
    modalContabilidad.style.visibility = "visible";
    modal2.classList.toggle("modal-closeContador");
})

cerrarContabilidad.addEventListener("click", function(){
    modal2.classList.toggle("modal-closeContador");
    setTimeout(function(){
        modalContabilidad.style.opacity = "0";
        modalContabilidad.style.visibility = "hidden";
    },850)
})

window.addEventListener("click",function(i){
    console.log(e.target)
    if(i.target == modalContabilidad){
    modal2.classList.toggle("modal-closeContador");
    setTimeout(function(){
        modalContabiliad.style.opacity = "0";
        modalContabiliad.style.visibility = "hidden";
    },900)
    }
})