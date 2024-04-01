function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 25000) + " Đ";
    }
    else if (FromC == "VND"&& To =="USD"){
        Result = "Result: "+ (Amount / 25000) + " $";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }
    if (FromC == "JPY" && To == "VND") {
        Result = "Result: " + (Amount * 158.96) + " Đ";
    }
    else if (FromC == "VND"&& To =="JPY"){
        Result = "Result: "+ (Amount / 158.96) + "¥";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " ¥"
    }
    if (FromC == "PHP" && To == "VND") {
        Result = "Result: " + (Amount * 443.09) + " Đ";
    }
    else if (FromC == "VND"&& To =="PHP"){
        Result = "Result: "+ (Amount / 443.09) + "¥";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " ¥"
    }

    document.getElementById("Result").innerHTML = Result;
}
