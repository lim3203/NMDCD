const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const amPm = document.querySelector(".amPm");
const amPmTitle = amPm.querySelector("h4");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    let hours = date.getHours();
    const seconds = date.getSeconds();
    if(hours >= 12){
        hours = hours - 12;
        amPmTitle.innerText = `pm`;
    }   else   {
        if(hours < 10){
            hours = '0$hours';
            amPm.innerText = `am`;
        }
    }
    clockTitle.innerText = `${hours}:${
        minutes <10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}



function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
