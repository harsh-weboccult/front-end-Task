
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
        btn_start.disabled = true;
        btn_stop.disabled = false;
        btn_clear.disabled = false;
        btn_pause.disabled = false;
    }
    else if (val == 2) {
        btn_start.disabled = false;
        btn_start.innerHTML = "Restart";
        btn_stop.disabled = true;
        btn_clear.disabled = false;
    }
    else if (val == 3) {
        btn_start.disabled = false;
        btn_start.innerHTML = "Start";
        btn_stop.disabled = false;
        btn_clear.disabled = true;
    }
    else if (val == 4) {
        btn_start.disabled = false;
        btn_start.innerHTML = "Resume";
        btn_stop.disabled = false;
        btn_clear.disabled = false;
    }
    else {
        alert("internal error")
    }
}


/* Clearning the timer*/
const clear1 = () => {
    console.log("hello");
    secound = 00;
    miniute = 00;
    hour = 00;
    m_sec = 00;
    Inputsec.value = "";
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
const calculateTime = () => {

    if ((Inputsec.value == '') || (Inputsec.value <=0)) {
        alert('please enter Proper  number')
    }
    else {
        secound = Math.round(Inputsec.value);

        if (secound <= 60 && secound >= 0) {

            hour = 0;
            miniute = 0;
            secound = secound - 1;

        }
        else if (secound > 60 && secound <= 3600) {
            miniute = Math.floor(secound / 60);
            secound = secound % 60;
        }
        else if (secound > 3600) {

            hour = Math.floor(secound / 3600);
            remail_minute = Math.floor(secound % 3600)
            miniute = Math.floor(remail_minute / 60);
            console.log(Math.floor(remail_minute % 60));
            secound = secound % 60;

        }
    }
}
/* For strting Timer*/
const start = () => {

    if (document.getElementById("btn-start").innerHTML != "Resume") {
        m_sec = 100;
        calculateTime();

        if (secound == 0 && miniute == 0 && hour == 0) {
            return;
        }
    }
    else {
        m_sec = r_m_sec;
    }


    interval = setInterval(() => {
        document.getElementById('m-sec').innerHTML = m_sec;
        document.getElementById('sec').innerHTML = secound;
        document.getElementById('min').innerHTML = miniute;
        document.getElementById('hou').innerHTML = hour;

        if (m_sec == 0 && secound == 0 && miniute == 0 && hour == 0) {
            return;
        }
        if (m_sec == 0) {
            secound = secound - 1;
            m_sec = 99;

        }
        else if (hour == 0 && miniute == 0) {
            hour = 0;
            miniute = 0;

        }
        else if (secound == 0) {
            secound = 59;
            miniute = miniute - 1;
        }
        else if (miniute == 0) {
            miniute = 60;
            hour = hour - 1;
        }
        if (miniute < 0) {
            miniute = 0;

        }
        r_m_sec = m_sec;
        m_sec = m_sec - 1;
    }, 10)
    disableBtn(1);

}


/* For Stoping Function*/
const stop = () => {
    clearInterval(interval);
    disableBtn(2);

}
/*for pause function */
const pause = () => {
    console.log(interval);
    clearInterval(interval);
    rem_value.innerHTML = `POUSE AT:${hour}HH,${miniute} MM,${secound} SS`;
    rem_value.classList.add('pause')
    bor.style.borderColor = "blue"
    disableBtn(4);
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
