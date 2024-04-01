while (true) {
    let temperature = +prompt("Please enter the temperature: ");
    if(temperature > 100) {
        alert("Please lower the temperature");
    }
    else if(temperature < 20){
        alert("Please higher the temperature");
    }
}
