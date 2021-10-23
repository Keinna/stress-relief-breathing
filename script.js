const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 19000;
const breatheTime = (totalTime / 5) * 2;
const BreatheIn = totalTime / 4.7;
const BreatheOut = totalTime / 2.4;
const holdTime = totalTime / 2.7;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe in';
    container.className = 'container grow';
    setTimeout(() => {

    })
    setTimeout(() => {
        text.innerText = 'Hold';
        setTimeout(() => {
            text.innerText = 'Breathe out';
            container.className = 'container shrink';
        }, holdTime)
    }, BreatheIn);
}

setInterval(breathAnimation, totalTime);