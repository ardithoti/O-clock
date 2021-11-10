
const secondHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    // seconds
      const now = new Date();
      const seconds = now.getSeconds();
      const secondDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // minutes

    const min = now.getMinutes();
    const minuteDegrees = ((min / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // hour

    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  
}



setInterval(setDate,1000);