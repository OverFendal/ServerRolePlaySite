const map = document.querySelector(".divMap");
let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX, startY;

function applyTransform() {
    const mapRect = map.getBoundingClientRect();
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;


    if (scale <= 1) {
        scale = 1;
        translateX = 0;
        translateY = 0;
    } else {
    
        const mapWidth = map.offsetWidth * scale;
        const mapHeight = map.offsetHeight * scale;

        const maxOffsetX = (mapWidth - containerWidth) / 2;
        const maxOffsetY = (mapHeight - containerHeight) / 2;

    
        translateX = Math.min(maxOffsetX, Math.max(-maxOffsetX, translateX));
        translateY = Math.min(maxOffsetY, Math.max(-maxOffsetY, translateY));
    }

    map.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    map.style.transformOrigin = 'center center';
}

// Перетаскивание карты
map.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    startX = e.clientX;
    startY = e.clientY;

    translateX += dx;
    translateY += dy;

    applyTransform();
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

// Кнопки + и −
document.getElementById("zoom-in").addEventListener("click", () => {
    scale = Math.min(5, scale + 0.2);
    applyTransform();
});

document.getElementById("zoom-out").addEventListener("click", () => {
    scale = Math.max(0.5, scale - 0.2);
    applyTransform();
});
function adjustZoomControlScale() {
    const zoomControls = document.querySelector(".zoom-controls");

    const ratio = window.devicePixelRatio || 1;
    const inverseScale = 1 / ratio;

    const fixedOffsetRight = 20; 
    const fixedOffsetTop = 20;  

    const xOffset = fixedOffsetRight * (1 - inverseScale);
    const yOffset = fixedOffsetTop * (1 - inverseScale);

    zoomControls.style.transform = `translate(-${xOffset}px, ${yOffset}px) scale(${inverseScale})`;
}
adjustZoomControlScale();
window.addEventListener("resize", adjustZoomControlScale);
window.addEventListener("DOMContentLoaded", adjustZoomControlScale);
