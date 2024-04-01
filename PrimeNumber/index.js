function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0)
            return false;
    }
    return true;
}
let k = +prompt("Nhap vao so lan xuat hien snt dau tien  = ");
let count = 0;
let natural = 2;
let primeNumber = "";
while(count < k){
    if(isPrime(natural)) {
        primeNumber += (natural + " ");
        count++;
    }
    natural++;
}
document.getElementById("prime").innerHTML = primeNumber;