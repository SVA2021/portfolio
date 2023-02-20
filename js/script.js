'use strict';

const timerWrapper = document.getElementById('timer');
let defaultTime = 63; // add more time after every release

const timer = setInterval(() => {
    --defaultTime;
    timerWrapper.innerHTML = defaultTime;
    if (defaultTime == 0) {
        clearInterval(timer);
        location.href = 'https://sva2021.github.io/MyPortfolio';
    }
}, 1000);