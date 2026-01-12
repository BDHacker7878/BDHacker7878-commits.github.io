/* =========================
   1️⃣ Bouncing Ball (Canvas)
========================= */
const canvas = document.createElement('canvas');
canvas.id = "myCanvas";
canvas.width = 500;
canvas.height = 300;
canvas.style.border = "1px solid #000";
canvas.style.display = "block";
canvas.style.margin = "20px auto";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");
let x = 50, y = 50, dx = 3, dy = 3, radius = 20;

function animateBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "crimson";
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;

    if (x + radius > canvas.width || x - radius < 0) dx = -dx;
    if (y + radius > canvas.height || y - radius < 0) dy = -dy;

    requestAnimationFrame(animateBall);
}
animateBall();

/* =========================
   2️⃣ Confetti Animation
========================= */
function createConfetti() {
    const colors = ['#ff0a54','#ff477e','#ff85a1','#fbb1b1','#f9bec7'];
    const confettiCount = 100;
    const container = document.createElement('div');

    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.top = '-10px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.opacity = '0.8';
        confetti.style.transform = `rotate(${Math.random()*360}deg)`;
        confetti.style.borderRadius = '3px';
        confetti.style.animation = `confettiFall ${3 + Math.random()*2}s linear forwards`;
        container.appendChild(confetti);
    }

    if (!document.getElementById('confettiStyle')) {
        const style = document.createElement('style');
        style.id = 'confettiStyle';
        style.textContent = `
        @keyframes confettiFall {
            to { transform: translateY(100vh) rotate(360deg); opacity:0; }
        }`;
        document.head.appendChild(style);
    }

    setTimeout(() => { container.remove(); }, 5000);
}

// Call Confetti after 1 second
setTimeout(createConfetti, 1000);

/* =========================
   3️⃣ Floating Text
========================= */
function floatingText(text){
    const span = document.createElement('span');
    span.textContent = text;
    span.style.position = 'fixed';
    span.style.left = Math.random() * window.innerWidth + 'px';
    span.style.bottom = '-30px';
    span.style.color = 'dodgerblue';
    span.style.fontSize = '24px';
    span.style.fontWeight = 'bold';
    span.style.userSelect = 'none';
    span.style.pointerEvents = 'none';
    span.style.transition = 'transform 3s ease, opacity 3s ease';

    document.body.appendChild(span);

    setTimeout(() => {
        span.style.transform = 'translateY(-150vh)';
        span.style.opacity = '0';
    }, 50);

    setTimeout(() => { span.remove(); }, 3050);
}

// Call floating text every 2 seconds
setInterval(() => {
    floatingText("Sure Success Coaching Centre");
}, 2000);
