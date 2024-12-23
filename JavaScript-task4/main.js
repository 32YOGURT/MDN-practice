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

// callback 버전
/*
alice1.animate(aliceTumbling, aliceTiming).addEventListener('finish', () => 
    alice2.animate(aliceTumbling, aliceTiming).addEventListener('finish', () => 
        alice3.animate(aliceTumbling, aliceTiming)
    )
)
*/

// promise 버전
/*
alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(() => alice3.animate(aliceTumbling, aliceTiming));
*/

// async, await 버전
async function animateAlice (targetList) {
    for (const target of targetList) {
        await target.animate(aliceTumbling, aliceTiming).finished;
    } 
}

animateAlice([alice1, alice2, alice3]);
