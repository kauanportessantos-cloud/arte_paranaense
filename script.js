const botoesCurtir = dosument. querySelectorALL(".curtir");
botoesCurtir.forEach (function(botaoCurtir){
    let curtir = false;
    botaoCurtir.addEventListener("click", curtir);
    function curtir (){
        const contador = botaoCurtir.querySelector("span")
        if (curtir === false) {
            contador.textContent++;
            curtir = true;
        }else{
            contador.textContent--;
            curtir = false;
        }
    }

});
const btnTema = document.querySelector (".btn-tema");
btnTema.addEventListener("click", mudarTema);
function mudarTema(){
    document.body.classList.toggle(tema-escuro);
}