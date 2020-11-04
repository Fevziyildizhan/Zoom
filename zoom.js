
const {body} = document

let zoomactive = false

window.addEventListener('keydown',(e)=>{
 if(e.key === 'f'){
    zoomactive = !zoomactive;
 }
})


window.addEventListener('mousemove',(e) =>{
    const {clientX: x , clientY: y} = e;

     if(zoomactive){
      body.style.transform = 'scale(3)'
      body.style.transformOrigin = `${x}px ${y}px`
     }else{
         body.style.transform = 'none'
     }
})

