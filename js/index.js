var slides=new Array("opacity: 0;","opacity: 1;","opacity: 0;","opacity: 1;");
var tam=slides.length;
var satual=0;
var tmpSlider;
function trocaAutomatica(){
satual++;
if(satual >= tam){
location.assign("pagina_inicial.html");
}
document.getElementById("dvSlider").style=slides[satual];
}
function iniciaSlider(){
document.getElementById("dvSlider").style=slides[satual];
tmpSlider=setInterval(trocaAutomatica,2500);
}