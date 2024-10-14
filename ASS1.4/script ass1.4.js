const ball = document.getElementById("ball");
let movingRight = true;

function moveBall() {
    const startX = 100; 
    const startY = 100; 
    const endX = 300;   
    const endY = 300;   

    if (movingRight) {
        ball.style.left = endX + "px";
        ball.style.top = endY + "px";
    } else {
        ball.style.left = startX + "px";
        ball.style.top = startY + "px";
    }

    movingRight = !movingRight;
}
setInterval(moveBall,3000);