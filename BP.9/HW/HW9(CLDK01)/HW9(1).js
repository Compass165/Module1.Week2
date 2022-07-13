let a = +prompt('Nhập số a', '');
let b = +prompt('Nhập số b', '');
let c = (a % b == 0)?'ch':'kch';
if (c == 'ch'){alert('a chia hết cho b')}
else {alert('a không chia hết cho b')}