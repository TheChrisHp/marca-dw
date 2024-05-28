document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("navv");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    navv.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    navv.style.right = "-250px";
    background_menu.style.display = "none";
}

