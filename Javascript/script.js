window.onload=function(){
    let minutes=0;
    let seconds=0;
    let tens= 0;
    let appendMinutes=document.querySelector(".minutes");
    let appendSeonds=document.querySelector(".seconds");
    let appendTens=document.querySelector(".tens");
    let startBtn=document.querySelector(".start-btn");
    let stopBtn=document.querySelector(".stop-btn");
    let resetBtn=document.querySelector(".reset-btn");
    let Interval

    const startTimer= ()=>{
        tens++;
        if(tens<9){
            appendTens.innerHTML="0"+tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }
        if(tens>99){
            seconds++;
            appendSeonds.innerHTML="0"+seconds;
            tens=0;
            appendTens.innerHTML="0"+0;

        }
        if(seconds>9){
            appendSeonds.innerHTML=seconds;
        }
        if(seconds>59){
            minutes++;
            appendMinutes.innerHTML="0"+minutes;
            seconds=0;
            appendSeonds.innerHTML="0"+0;
        }

    
    };
    startBtn.onclick=()=>{
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);
    };
    stopBtn.onclick=()=>{
        clearInterval(Interval);
    };
    resetBtn.onclick=()=>{
        clearInterval(Interval);
        tens="00";
        seconds="00";
        minutes="00";
        appendTens.innerHTML=tens;
        appendSeonds.innerHTML=seconds;
        appendMinutes.innerHTML=minutes;
    }

};