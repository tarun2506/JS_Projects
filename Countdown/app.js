const countDown = () =>{
  const countDate = new Date('June 4, 2021 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // How the does time work:
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  // Calculate the shit:
  const textDay = (gap / day).toFixed(0);
  const textHour = ((gap % day) / hour).toFixed(0);
  const textMin = ((gap % hour) / min).toFixed(0);
  const textSec = ((gap % min) / sec).toFixed(0);

  document.querySelector('.day').innerText = textDay;
  document.querySelector('.hour').innerText = textHour;
  document.querySelector('.minute').innerText = textMin;
  document.querySelector('.second').innerText = textSec;
};

setInterval(countDown, 1000);