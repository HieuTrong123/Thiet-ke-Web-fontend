function Jump__navigation(){
    document.onwheel=function(e) {
        const head =document.querySelector('.head');
        const container = document.querySelector('#container');
        if(e.deltaY>0){
            head.style.position="";
            container.classList.remove('container__marginTop');
        } 
        else{
            head.style.position="fixed";
            container.classList.add('container__marginTop');
        }
    }
}
Jump__navigation();

function Slide_Swich(ms){
  
    return new Promise((resolve) =>  setTimeout(resolve,ms))
  
}

function Slide_Auto(){
    const slideAuto = document.querySelectorAll('input[name="fancy"]');
    var i=0;
    var length = slideAuto.length;
        Slide_Swich(3000)  
        .then(() => {
            slideAuto[i++].checked=true;
            return Slide_Swich(3000);
        })
        .then(() => {
            slideAuto[i++].checked=true;
            return Slide_Swich(3000);
        })
        .then(() => {
            slideAuto[i++].checked=true;
            return Slide_Swich(3000);
        })
        .then(() => {
            slideAuto[i++].checked=true;
            return Slide_Swich(3000);
        })
        
}
Slide_Auto();

