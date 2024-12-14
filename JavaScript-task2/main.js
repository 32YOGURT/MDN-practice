const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i=1; i<=5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    newImage.setAttribute('alt', `picture ${i}`);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', function(event) {
    displayedImage.setAttribute('src', event.target.src);
})

btn.addEventListener('click', function(event){
    if (btn.className === 'dark') {
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
        btn.textContent = 'Lighten';
        btn.setAttribute('class', 'light');
    } else if (btn.className === 'light') {
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 0)';
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
    }
})

/* Wiring up the Darken/Lighten button */
