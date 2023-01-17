'use strict';

const timerWrapper = document.getElementById('timer');
let defaultTime = 42; // answer for all questions in the universe

const timer = setInterval(() => {
  --defaultTime;
  timerWrapper.innerHTML = defaultTime;
  if (defaultTime == 0) {
    clearInterval(timer);
    location.href = 'https://sva2021.github.io/MyPortfolio';
  }
}, 1000);