document.body.classList.add('loading');

const splitText = () => {
  document.querySelectorAll('.split').forEach((node) => {
    const parts = [...node.childNodes];
    node.innerHTML = '';
    parts.forEach((part) => {
      if (part.nodeType === Node.TEXT_NODE) {
        [...part.textContent].forEach((char, index) => {
          const span = document.createElement('span');
          span.className = 'char';
          span.style.transitionDelay = `${index * 22}ms`;
          span.innerHTML = char === ' ' ? '&nbsp;' : char;
          node.append(span);
        });
      } else {
        const clone = part.cloneNode(false);
        [...part.textContent].forEach((char, index) => {
          const span = document.createElement('span');
          span.className = 'char';
          span.style.transitionDelay = `${index * 22}ms`;
          span.innerHTML = char === ' ' ? '&nbsp;' : char;
          clone.append(span);
        });
        node.append(clone);
      }
    });
  });
};

splitText();
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loader').classList.add('done');
    document.body.classList.remove('loading');
    document.querySelector('.hero .split').classList.add('visible');
  }, 750);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: .14 });
document.querySelectorAll('.reveal,.split,.image-reveal').forEach((el) => observer.observe(el));

const cursor = document.querySelector('.cursor');
window.addEventListener('pointermove', (event) => {
  cursor.style.transform = `translate(${event.clientX}px,${event.clientY}px) translate(-50%,-50%)`;
});
document.querySelectorAll('a,[data-tilt]').forEach((el) => {
  el.addEventListener('pointerenter', () => cursor.classList.add('hover'));
  el.addEventListener('pointerleave', () => cursor.classList.remove('hover'));
});

const tilt = document.querySelector('[data-tilt]');
window.addEventListener('pointermove', (event) => {
  if (matchMedia('(pointer: coarse)').matches) return;
  const rx = (event.clientY / innerHeight - .5) * -13;
  const ry = (event.clientX / innerWidth - .5) * 15;
  tilt.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
});

document.querySelectorAll('.magnetic').forEach((item) => {
  item.addEventListener('pointermove', (event) => {
    const box = item.getBoundingClientRect();
    item.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * .13}px,${(event.clientY - box.top - box.height / 2) * .13}px)`;
  });
  item.addEventListener('pointerleave', () => item.style.transform = '');
});

let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY;
  document.querySelector('.nav').classList.toggle('hide', y > lastY && y > 180);
  lastY = y;
  document.querySelectorAll('.photo-main img,.gallery img').forEach((image) => {
    const rect = image.parentElement.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < innerHeight) image.style.translate = `0 ${(rect.top / innerHeight) * -24}px`;
  });
}, { passive: true });

const canvas = document.querySelector('#snow');
const ctx = canvas.getContext('2d');
let flakes = [];
function resizeSnow() {
  canvas.width = innerWidth * devicePixelRatio;
  canvas.height = innerHeight * devicePixelRatio;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  flakes = Array.from({ length: Math.min(80, innerWidth / 14) }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    r: Math.random() * 1.6 + .25, s: Math.random() * .45 + .18,
    drift: Math.random() * .5 - .25
  }));
}
function snow() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.fillStyle = 'rgba(255,255,255,.7)';
  flakes.forEach((f) => {
    f.y += f.s; f.x += f.drift;
    if (f.y > innerHeight) { f.y = -4; f.x = Math.random() * innerWidth; }
    ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill();
  });
  requestAnimationFrame(snow);
}
resizeSnow(); snow(); addEventListener('resize', resizeSnow);
