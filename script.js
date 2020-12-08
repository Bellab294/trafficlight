const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightE3.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    
}
trafficLightEl.addEventListener('click', makeRed);


function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightEl.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
}
trafficLightE2.addEventListener('click', makeYellow);

function makeGreen() {
    trafficLightE3.style.background = ('green');
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.removeEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeYellow);

}
trafficLightE3.addEventListener('click', makeGreen);