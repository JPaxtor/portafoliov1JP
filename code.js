const head = document.querySelector(`.head`)
const btnM = document.querySelector(`.btn_1`)
const cont1 = document.querySelector(`.c1`);
const btn2 = document.querySelector(`.btn-2`)
let contadorBoxImg = 0;



Desplegar_menu = () =>{
    const valor = head.getAttribute(`data-visible`)
    if(valor == `true`){
        valor = head.setAttribute(`data-visible`,`false`)
    }
    else{
        valor = head.setAttribute(`data-visible`,`true`)
    }
}

Change_img = () => {
    let valorC1 = cont1.getAttribute(`data-visible`)
    console.log(contadorBoxImg)
        if (contadorBoxImg == 0){
            valorC1 = cont1.setAttribute(`data-visible`, `sec`)
        }
        else if(contadorBoxImg == 1){
                valorC1 = cont1.setAttribute(`data-visible`,`ter`)
            }
        else if(contadorBoxImg == 2){
            valorC1 = cont1.setAttribute(`data-visible`,`primer`)
            contadorBoxImg =0;
        }
    contadorBoxImg++;
}



btnM.addEventListener(`click`,Desplegar_menu)
let animationBox = setInterval(Change_img, 2000)