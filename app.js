//clock
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const parts = document.querySelector('.am-pm');
//days
const day = document.querySelector(".day");
const dayDigit = document.querySelector(".dayDigit");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

//clock
setInterval(updateTime, 1000);
function updateTime() {
    const currentTime = new Date();
    let currentHour = currentTime.getHours().toString().padStart(2,'0');
    let currentMinute = currentTime.getMinutes().toString().padStart(2,'0');
    let currentSeconds = currentTime.getSeconds().toString().padStart(2,'0');
    let currentDayDigit = currentTime.getDate().toString().padStart(2,0);
    let currentMonth = (currentTime.getMonth()+1).toString().padStart(2,0);
    let currentYear = currentTime.getFullYear().toString();
    let currentDay = findDay(currentTime.getDay());

    // (currentTime.getHours()<12 ? parts.textContent = "AM" : "PM")

    if(currentTime.getHours()<12){
        parts.textContent = "AM";
    }else{
        parts.textContent = "PM";
    }
    hours.textContent = currentHour;
    minutes.textContent = currentMinute;
    seconds.textContent = currentSeconds;
    dayDigit.textContent = currentDayDigit + " /";
    month.textContent = currentMonth + " /";
    year.textContent = currentYear;
    day.textContent = currentDay;
}
updateTime();


//days
function findDay(d){
    if(d==0) return "Sunday" ;
    if(d==1) return "Monday" ;
    if(d==2) return "Tuesday" ;
    if(d==3) return "Wednesday" ;
    if(d==4) return "Thursday" ;
    if(d==5) return "Friday" ;
    if(d==6) return "Saturday" ;
}