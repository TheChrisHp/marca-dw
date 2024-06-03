//llamo a todas las id del DOM y les coloco variables
const nav = document.getElementById("navv");
const logo = document.getElementById("logo-nav");
const hamburguesa = document.getElementById("btn_menu");
const navdesk = document.getElementById("navdesktop")
const stick1 = document.getElementById("stick1")
const stick2 = document.getElementById("stick2")
const stick3 = document.getElementById("stick3")
const linkproducto = document.getElementById("producto")

function alternarMenu() {
    if (nav.style.right === "-49rem") { //al presionar el "btn_menu" si el menu ui esta a -49rem entonces se abre
        logo.style.display = "none"; //quito el logo del nav desktop
        nav.style.right = "0px"; //muestro el ui del menu
        //establezco fijo el boton hamburguesa
        hamburguesa.style.position = "fixed"
        hamburguesa.style.top = "10px"
        hamburguesa.style.right = "1.7rem"
        /////////////////////////////////////////////
        hamburguesa.style.zIndex = "999999999"; //pongo encima de todos los estilos el menu hamburugesa
        navdesk.style.border = "none" 
        //animo las barras del menu hambruguesa
        stick1.style.transform = "rotate(37deg)"
        stick2.style.opacity = "0"
        stick3.style.transform = "rotate(-37deg)"
    } else {
        logo.style.display = "inherit"; //dejo el logo como estaba en el desktop
        nav.style.right = "-49rem"; //oculto el menu ui a la derecha
        navdesk.style.borderBottom = "4px solid #dbdbdb"
        //establezco como estaba antes el boton hamburguesa
        hamburguesa.style.position = "inherit"
        hamburguesa.style.top = "none"
        hamburguesa.style.rigth = "none"
        //quito la animacion del menu hamburguesa
        stick1.style.transform = "none"
        stick2.style.opacity = "1"
        stick3.style.transform = "none"
    }
}
// debugger
function cerrarMenuLink(){
    if (linkproducto){ //al ser verdadero al presionar "Productos" en el menu hamburugesa se cierra el menu
        logo.style.display = "inherit"; //dejo el logo como estaba en el desktop
        nav.style.right = "-49rem"; //oculto el menu ui a la derecha
        navdesk.style.borderBottom = "4px solid #dbdbdb"
        //establezco como estaba antes el boton hamburguesa
        hamburguesa.style.position = "inherit"
        hamburguesa.style.top = "none"
        hamburguesa.style.rigth = "none"
        //quito la animacion del menu hamburguesa
        stick1.style.transform = "none"
        stick2.style.opacity = "1"
        stick3.style.transform = "none"
    }
}

// Agrego evento para que al presionar un link se cierre el menu
document.getElementById("producto").addEventListener("click", cerrarMenuLink)


// Agrega el evento al botón del menú
document.getElementById("btn_menu").addEventListener("click", alternarMenu); //al tocar el boton "btn_menu" se abre la funcion "alternarMenu"
