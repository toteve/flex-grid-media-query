// ACTIVACION EN EL DOM del evento que escuchara el evento click sobre .menu-btn
//  y activa el evento Show para que se muestre el SideBar, con toggle provocara
// si no esta aparecera y si esta desaparecera
// Entonces escucha el click en la clase .menu-btn y provoca mostrar/ocultar el
// elemento de la clase .nav-menu

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});


// Uso del ScrollReveal, que ya fue invocado su archivo en el Html como un script y a su vez 
// el Html  llama tambien a este main.js

// aqui como parametro de .reveal() colocamos la clase que quiere ser afectada, y en caso de 
// necesitar puede agregar un tiempo de espera como parametro de la funcion para efecto delay
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

