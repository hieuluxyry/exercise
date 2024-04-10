class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.directionX = 1;
        this.directionY = 1;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
    }
    move() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.x += this.directionX * 3;
        this.y += this.directionY * 3;
        if (this.y - this.radius <= 0 || this.y + this.radius >= this.canvas.height) {
            this.directionY *= -1;
        }
        if (this.x - this.radius <= 0 || this.x + this.radius >= this.canvas.width) {
            this.directionX *= -1;
        }
        this.draw();
    }
}
let circle1 = new Circle(100, 270, 30, "pink");
circle1.draw();
setInterval(() => {
    circle1.move();

}, 10)