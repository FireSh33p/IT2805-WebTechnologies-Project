let w = window.outerWidth;
let container=document.getElementById("mainGuide");


function functionGoLeft() {
  if(w>2700){
    container.scrollLeft-=800;
  }else{container.scrollLeft-=550;}
  
} 
function functionGoRight() {
  if(w>2700){
    container.scrollLeft+=800;
  }else{container.scrollLeft+=550;}
 
  
  
  
} 
