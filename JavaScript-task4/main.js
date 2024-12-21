const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];
  
const aliceTiming = {
duration: 2000,
iterations: 1,
fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


function animateActivate(target, callback) {
    target.animate(aliceTumbling, aliceTiming);
    setTimeout(() => {callback()}, 2000);
}

animateActivate(alice1, 
    animateActivate(alice2, 
        animateActivate(alice3)) 
);
