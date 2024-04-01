const ball = document.getElementById('ball');
const button = document.getElementById('button');

ball.style.position = 'relative';
let pos = 0;
let left = '';

button.addEventListener('click', () => {
    pos += 10;
    left = pos;
    ball.style.left = left + 'px';
})