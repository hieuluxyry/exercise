// mot so cach lay input dau vao
function plus(){
    let c = document.getElementById("a").value;
    let d = document.getElementById("b").value;
    let res = parseInt(c) + parseInt(d);
    document.getElementById("result").innerHTML = res;
}
function diff(){
    let c = document.getElementById("a").value;
    let d = document.getElementById("b").value;
    let res = parseInt(c) - parseInt(d);
    document.getElementById("result").innerHTML = res;
}
function multiply(){
    let c = document.getElementById("a").value;
    let d = document.getElementById("b").value;
    let res = parseInt(c) * parseInt(d);
    document.getElementById("result").innerHTML = res;
}
function divide(){
    let c = document.getElementById("a").value;
    let d = document.getElementById("b").value;
    let res = parseInt(c) / parseInt(d);
    document.getElementById("result").innerHTML = res;
}
