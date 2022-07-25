
// Script que controla la interacion al hacer scroll en las paginas con la scrollbar despbloqueada 

let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function(){
      let desplazamiento = window.pageYOffset;
      if(ubicacionPrincipal >= desplazamiento){
        document.getElementById('navbar').style.top = '0';}
        else{
          document.getElementById('navbar').style.top = '-100px';
        }
        ubicacionPrincipal = desplazamiento;
}