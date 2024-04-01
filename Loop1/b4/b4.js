let i = [];
i[0] = 1;
i[1] = 1;
let j = 1;
while(i[j] % 5 > 0){
    j++;
    i[j] = i[j - 1] + i[j - 2];
}
alert("Frist Fibo Number % 5 == 0 is: " + i[j]);