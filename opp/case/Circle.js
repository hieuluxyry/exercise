
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let  x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let paddleHeight = 20;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let  score = 0;
document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
    let  relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
function drawScore() {
    ctx.font = "30px Time New Roman";
    ctx.fillStyle = "hotpink";
    ctx.fillText("Score: " + score, 10, 20);
}
function updateBallPosition() {
    x += dx;
    y += dy;
}
function checkCollisions() {
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height - ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            score++;
        } else {
            alert("Game Over. Final Score: " + score);
            document.location.reload();
            clearInterval(interval); 
        }
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScore();
    updateBallPosition();
    checkCollisions();
}
let  interval = setInterval(draw, 10);