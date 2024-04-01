let sum = 0;
let input;

while (true) {
    input = prompt('Nhập một số hoặc q để thoát:');
    
    if (input === 'q') {
        break;
    } else if (!isNaN(parseInt(input))){
        sum += parseInt(input);
    } else {
        alert('Vui lòng nhập một số hợp lệ hoặc q để thoát.')
    }
}
alert('Tổng số là: ' + sum);
