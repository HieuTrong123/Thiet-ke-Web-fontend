var scroll=0;
function Jump__navigation(){
    document.onwheel=function(e) {
        const head =document.querySelector('.head');
        const container = document.querySelector('#container');
        if(e.deltaY>0){
            ++scroll;
            if(scroll>2){
                
                head.classList.add('temp','head__height');
            }
        } 
        else{
          if(scroll>0)
                --scroll;
                head.classList.remove('head__height');
            if(scroll<1){
                head.classList.remove('temp');
            }
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

