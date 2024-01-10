const min = document.getElementById('min');
const sec = document.getElementById('sec');
const mil = document.getElementById('mil');

const start =document.getElementById('start');
const pasue = document.getElementById('pause');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const laplist = document.getElementById('laplist');


let minutes = 0;
let seconds = 0;
let milli = 0;
let interval;

start.addEventListener('click', startTimer);
pasue.addEventListener('click', pauseTimer);
reset.addEventListener('click', resettimer);
stop.addEventListener('click', stopTimer);

function startTimer(){
    interval = setInterval(updateTimer, 4);
    start.disabled = true;

}

function pauseTimer(){
    clearInterval(interval);
    start.disabled = false;

}

function resettimer(){
    clearInterval(interval);
    resetTimerData();
    start.disabled = false;
}

function stopTimer(){
    clearInterval(interval);
    addToLap();
    resetTimerData();
    start.disabled = false;
}

function updateTimer(){
    milli++;
    if(milli === 1000){
        milli = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++
        }
    }
    displayTimer();
}

function displayTimer(){
    mil.textContent = padTime(milli);
    sec.textContent = padTime(seconds);
    min.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}

function resetTimerData(){
     minutes = 0;
    seconds = 0;
     milli = 0;
     displayTimer();
}

function addToLap(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milli)}`

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${laplist.childElementCount + 1}: ${lapTime}</span>`
    laplist.appendChild(listItem);
}