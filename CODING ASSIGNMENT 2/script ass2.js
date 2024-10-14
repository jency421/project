function createBallMovement(ballId, speedX, speedY) {
    const ball = document.getElementById(ballId);
    let posX = Math.random() * 400; 
    let posY = Math.random() * 400;

    function move() {
        posX += speedX;
        posY += speedY;
        if (posX <= 0 || posX >= 350) speedX = -speedX;
        if (posY <= 0 || posY >= 350) speedY = -speedY;

        ball.style.left = posX + 'px';
        ball.style.top = posY + 'px';

        requestAnimationFrame(move);
    }

    return {
        start: move
    };
}

const ball1 = createBallMovement('ball1', 2, 3);
const ball2 = createBallMovement('ball2', 3, 4);
const ball3 = createBallMovement('ball3', 4, 2);
ball1.start();
ball2.start();
ball3.start();