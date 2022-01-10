let num = prompt('Mời bạn nhập só: ');
let total = 0;
for (let i = 1; i < num; i++) {
    total += i;
    console.log('total', total);
}
alert(total);