let i = [];
let res = "";
i[0] = 1;
res += i[0] + " ";
i[1] = 1;
res += i[1] + " ";
for(let j = 2; j < 20; j++){
    i[j] = i[j - 1] + i[j - 2];
    res += i[j] + " ";
}
document.getElementById("result").innerHTML = res;
//1 1 2 3 5 8 13