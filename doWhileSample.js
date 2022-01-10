let value = null;
do {
    value = prompt('Mời bạn nhập số từ 1 - 10: ');
}while (value < 1 || value > 10);
document.write('Số bạn vừa nhập là: ' + value);