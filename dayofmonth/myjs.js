function check() {
    let month = +document.getElementById('month').value;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('result').innerHTML = "thang co 31  ngay";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('result').innerHTML = "thang co 30  ngay";
            break;
        case 2:
            document.getElementById('result').innerHTML = "thang co 28 or 29  ngay";
            break;
        default :
            document.getElementById('result').innerHTML = "sai du lieu";
    }
}
