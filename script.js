// script.js
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');


const targetDate = new Date(new Date().getFullYear(), 7, 3, 0, 0, 0); 


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


function updateTimer() {
    
    const now = new Date().getTime();

    const distance = targetDate.getTime() - now;

    
    if (distance < 0) {
        clearInterval(timerInterval);
        console.log("Час вичерпано!");
        return;
    }

   
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
}


const timerInterval = setInterval(updateTimer, 1000);


updateTimer();
