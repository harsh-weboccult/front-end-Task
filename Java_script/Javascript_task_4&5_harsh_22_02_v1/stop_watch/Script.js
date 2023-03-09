
var secound = 0, miniute = 0, hour = 0, m_sec = 0, r_m_sec = 0;
var Inputsec = document.getElementById('inputNumber');
const rem_value = document.getElementById('show-remaining');
const bor = document.getElementById('bor');
const btn_start = document.getElementById("btn-start");
const btn_stop = document.getElementById("btn-stop");
const btn_clear = document.getElementById("btn-clear");
const btn_pause = document.getElementById("btn-pause");
//for validationg the button
function disableBtn(val) {
    if (val == 1) {
        btn_start.innerHTML = "Restart";
    }
    else if (val == 2) {
        
        btn_start.innerHTML = "Restart";
        console.log("button disable");
        
    }
    else if (val == 3) {
      
        btn_start.innerHTML = "Start";
      
    }

    else {
        alert("internal error")
    }
}


/* Clearning the timer*/
const clear1 = () => {

    secound = 00;
    miniute = 00;
    hour = 00;
    m_sec = 00;
    document.getElementById('sec').innerHTML = secound + "0";
    document.getElementById('min').innerHTML = miniute + "0";
    document.getElementById('hou').innerHTML = hour + "0";
    document.getElementById('m-sec').innerHTML = m_sec + "0";
    rem_value.innerHTML = ` Enter Time & HITE Start..`;
    rem_value.classList.remove('pause')
    bor.style.borderColor = "black"
    clearInterval(interval);
    disableBtn(3);

}

/* Time Calculate button */

/* For strting Timer*/
const start = () => {

    if ((btn_start.innerHTML == "Restart")) {
        clearInterval(interval);
        m_sec = 0;
        secound = 00;
        miniute = 00;
        hour = 00;
        rem_value.innerHTML = ` Started`;
        rem_value.classList.remove('pause')
        bor.style.borderColor = "green"

    }
  
      interval = setInterval(() => {
        document.getElementById('m-sec').innerHTML = m_sec;
        document.getElementById('sec').innerHTML = secound;
        document.getElementById('min').innerHTML = miniute;
        document.getElementById('hou').innerHTML = hour;


        if (m_sec == 99) {
            secound = secound + 1;
            m_sec = 1;

        }
        else if (secound == 60) {
            secound = 1;
            miniute = miniute + 1;
        }
        else if (miniute == 60) {
            miniute = 1;
            hour = hour + 1;
        }
        r_m_sec = m_sec;
        m_sec = m_sec + 1;
    }, 10)
    disableBtn(1);

}


/* For Stoping Function*/
const stop = () => {
    clearInterval(interval);
    rem_value.innerHTML = "Watch Stop";
    disableBtn(2);

}
/*for pause function */
const pause = () => {
    a = `POUSE AT:${hour}HH,${miniute} MM,${secound} SS`;
    rem_value.innerHTML = rem_value.innerHTML + "<br/>" + a;
    rem_value.classList.add('pause')
    bor.style.borderColor = "blue"

}



/*colling function*/
/*Start Button*/
btn_start.addEventListener("click", start);
/* Stop Button*/
btn_stop.addEventListener("click", stop);
/* Reset button */
btn_clear.addEventListener("click", clear1);
/* pause button */
btn_pause.addEventListener("click", pause);
