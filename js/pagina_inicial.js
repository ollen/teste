var slides=new Array("Serviços De Qualidade","Confiabilidade e Segurança","Suporte e Assistência");
var tam=slides.length;
var satual=0;
var tmpSlider;
function trocaAutomatica(){
satual++;
if(satual >= tam){
satual=0;
}
document.getElementById("dvSlider").innerHTML=slides[satual];
}
function iniciaSlider(){
document.getElementById("dvSlider").innerHTML=slides[satual];
tmpSlider=setInterval(trocaAutomatica,2500);
}
function menushow() {
    let menuMobile=document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}
function ir_logar() {
    location.assign("pagina_inicial.index");

}