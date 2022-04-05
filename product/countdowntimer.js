let endDate = new Date('April 20, 2022 00:00:00').getTime();

let countDownTimer = setInterval(() => {

let now = new Date().getTime();

let remainingTime = endDate - now;

const second = 1000;

const minute = second * 60;

const hour = minute * 60;

const day = hour * 24;

daysLeft = Math.trunc(remainingTime / day);

hoursLeft = Math.trunc((remainingTime % day) / hour);

minutesLeft = Math.trunc((remainingTime % hour) / minute);

secondsLeft = Math.trunc((remainingTime % minute) / second);

document.querySelector('.item__tradeOpenleftTime--timer__day').innerHTML = daysLeft ;

document.querySelector('.item__tradeOpenleftTime--timer__hour').innerHTML = hoursLeft ;

document.querySelector('.item__tradeOpenleftTime--timer__minuet').innerHTML = minutesLeft ;

document.querySelector('.item__tradeOpenleftTime--timer__second').innerHTML = secondsLeft ;

if (remainingTime <= 0) {

    document.querySelector('.item__tradeOpenleftTime--timer').innerHTML = "Time Over" ; 
}


}, 1000);