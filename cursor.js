const cursor = document.querySelector('.cursor-wrapper');
const cursorCircle = document.querySelector('.cursor-circle');
const cursorDot = document.querySelector('.cursor-dot');

let mouseX = 0;
let mouseY = 0;
let cursorCircleX = 0;
let cursorCircleY = 0;
let cursorDotX = 0;
let cursorDotY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // interpolate position (0.1 = slower, 0.3 = faster follow)
    cursorCircleX += (mouseX - cursorCircleX) * 0.2;
    cursorCircleY += (mouseY - cursorCircleY) * 0.2;
    cursorDotX += (mouseX - cursorDotX) * 0.5;
    cursorDotY += (mouseY - cursorDotY) * 0.5;

    cursorDot.style.top = cursorDotY + 'px';
    cursorDot.style.left = cursorDotX + 'px';

    cursorCircle.style.top = cursorCircleY + 'px';
    cursorCircle.style.left = cursorCircleX + 'px';

    requestAnimationFrame(animate);
}

animate();

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursorDot.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorDot.classList.remove('hover'));
});