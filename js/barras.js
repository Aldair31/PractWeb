let menu = document.querySelector('.barras i');
let seleccion = document.querySelectorAll('#menu a');
let existe_menu_movil = false;
let menu_movil = document.createElement('div');
menu_movil.innerHTML =
	/*html*/
	`  
            <div>
                <a href="#Home">HOME</a>
            </div>    
            <div>
                <a href="#Sales">SALES</a>
            </div>
            <div>
                <a href="#Rentals">RENTALS</a>
            </div>    
            <div>
                <a href="#Agents">AGENTS</a>
            </div>
            <div>
                <a href="#Contact">CONTACT</a>
            </div>              
    `;
menu_movil.style.position = 'absolute';
menu_movil.style.right = '3000px';
window.addEventListener("scroll", function(){
    console.log("evento scroll")
    menu_movil.style.top=(window.scrollY+70)+'px';
})
document.body.appendChild(menu_movil);
barras.addEventListener('click', function () {
	menu_movil.classList.add('menu_movil');
	menu_movil.classList.toggle('menu_movil_abierto');

    if(menu_movil.classList.contains('menu_movil_abierto')){
        menu.setAttribute('class','fas fa-times');
    }else{
        menu.setAttribute('class','fas fa-bars');
    }
});


for (const item of seleccion) {
    item.addEventListener('click', function(e){
        for (const item of seleccion) {
            item.classList.remove('seleccionado')
        }
        e.target.classList.add('seleccionado');
    })
}