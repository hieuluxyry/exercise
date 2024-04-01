//Bài 1
let a = +prompt("Nhap so a :");
let b = +prompt("nhap so b :");
if(a%b==0){
    alert("a chia het cho b")
} else{
    alert("a khong chia het cho b");
}
//Bài 2
let year = +prompt("Nhap nam sinh cua ban");
let curDate = new Date().getFullYear();
 let years = curDate-year;
if(years<16)
    alert("bạn chưa đủ tuổi vào lớp 10");
else
alert("bạn đủ tuổi vào lớp 10");
// Bài 4
let x =+prompt("X :");
let y = +prompt("Y :");
let z = +prompt("Z :");
if(x>y&&x>z){
    alert("x là MAX ");
} else if(y>x && y>z){
    alert("y là MAX");
} else {
    alert("z là MAX");
}
// Bài 5
let testScore = +prompt("testScore");
let midTermScore = +prompt("midTermScore");
let finalTermScore = +prompt("finalTermScore");

// Tính điểm trung bình
let averageScore = (testScore + midTermScore + finalTermScore) / 3;

// Xếp hạng học lực dựa trên điểm trung bình sử dụng if else
if (averageScore >= 9){
   alert("Hạng A: Học sinh xuất sắc");
} else if (averageScore >= 8) {
   alert("Hạng B: Học sinh giỏi");
} else if (averageScore >= 7) {
   alert("Hạng C: Học sinh khá");
} else if (averageScore >= 5.5) {
   alert("Hạng D: Học sinh trung bình");
} else if (averageScore >= 3.5) {
   alert("Hạng D: Học sinh yếu");
} else {
   alert("Hạng F: Học sinh kém");
}