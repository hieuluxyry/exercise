function Circle(x,y,radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;   
}
/// vẽ hình tròn  kích thước cố định 
// function createCircle(){
//    let ctx = document.getElementById("canvas").getContext("2d");
//    let circle= new Circle(300, 400, 50);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fill();
// }
// createCircle();
// // vẽ hình tròn  với bán kính ngẫu nhiên 
// function createCircle(){
//     var ctx = document.getElementById("canvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var circle= new Circle(500, 500, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fill();
// }

// createCircle();
// // vẽ hình tròn với màu ngẫu nhiên 
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }

// function getRandomColor(){
//    var red = getRandomHex();
//    var green = getRandomHex();
//    var blue = getRandomHex();
// 	 return "rgb(" + red + "," + blue + "," + green +")";
// }

// function createCircle(){
//     var ctx = document.getElementById("canvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var circle= new Circle(500, 500, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// }
// createCircle();
// /// vẽ hình tròn với vị trí ngẫu nhiên 
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
   var red = getRandomHex();
   var green = getRandomHex();
   var blue = getRandomHex();
	 return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    var ctx = document.getElementById("canvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
createCircle();