const items = document.getElementsByClassName("item");
console.log(items);

let activeItem = 0;

//navigazione in su
const downBtn = document.getElementById("angle_down");

//aggiungo l'azione di scroll sopra al mio bottone
downBtn.addEventListener("click", function () {

    if (activeItem < items.length - 1) {
        //tolgo la classe active dall'elemento corrente
        items[activeItem].classList.remove('active');

        //incremento l'indice dell'elemento da visualizzare
        activeItem++;

        //aggiungo la classe active all'elemento successivo
        items[activeItem].classList.add('active');


    }

}
)


//navigazione in su
const upBtn = document.getElementById("angle_up");

//aggiungo l'azione di scroll sopra al mio bottone
upBtn.addEventListener("click", function () {

    if (activeItem > 0) {
        //tolgo la classe active dall'elemento corrente
        items[activeItem].classList.remove('active');

        //decremento l'indice dell'elemento da visualizzare
        activeItem--;

        //aggiungo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

    }

}
)