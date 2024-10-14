let pos = 0;
const pageWidth = window.innerWidth;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
let direction = 0;
let focus = 0;

function Run() {
    let img = document.getElementById('PacMan');
    let imgWidth = img.width;
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + 'px';
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
    if (direction === 0 && pos + imgWidth > pageWidth) {
        direction = 1; 
    }
    if (direction === 1 && pos < 0) {
        direction = 0; 
    }
    return direction;
}

setInterval(Run, 200); 
