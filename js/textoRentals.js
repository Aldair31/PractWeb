let texto = document.querySelectorAll('.rentals');
let mayor = texto[1];


const ajustar = () => {
    let h = mayor.offsetHeight;
    for( let txt of texto){
        // console.log(txt.clientHeight);
        txt.style.height=`${h}px`;
    }
}

ajustar();


document.body.addEventListener('resize', function () {
    ajustar();
})

