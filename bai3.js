let num = 0;
let total = 0;
while (num !== -1){
    num = parseInt(prompt('Enter your number: '));
    alert(num);
    total += num;
}
document.getElementById('total').innerText = 'Tổng của bạn là: ' + total;