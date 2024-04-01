function check() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let BMI = weight / (Math.pow(height, 2));
    let result ="";
    if(BMI<18){
        document.write("Underweight");
    } else if(BMI<25.0){
        document.write("Normal");
    } else if(BMI<30.0){
        document.write("Overweight");
    } else {
        document.write("Obese");
    }
    document.getElementById("result").innerHTML = result;
}