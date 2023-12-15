let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 00 ;
let secs = 00 ;
let mins = 00 ;
let timerid = null;
  
startbtn.addEventListener('click',function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
timerid = setInterval(starttimer, 10);

});


stopbtn.addEventListener('click',function(){
    clearInterval(timerid);
    

});

resetbtn.addEventListener('click',function(){
    clearInterval(timerid);
    timerdisplay.innerHTML =` 00 : 00 : 00 `;
   msec = secs = mins = 00 ;
});
function starttimer(){
    msec++;
    if(msec == 100){
        msec =0;
        secs++;
        if(secs == 60){
            secs =0;
            mins++;
        }
    }
    let msecstring =msec <10 ? `0${msec}` :msec;
    let secsstring =secs <10 ? `0${secs}` :secs;
    let minsstring =mins <10 ? `0${mins}` :mins;


   timerdisplay.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;
   if(msec < 10){
    msecstring = `0${msec}`;
}
else{
    msecstring = msec;
}

   
}