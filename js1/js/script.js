var x = +prompt('������� �����, ������� ����� ��������� � �������');
var n = +prompt('������� �������, �  ������� ����� ���������');


function pow(a, n) {
var result = 1;

for ( var i = 0; i < n; i++) {
    result = result * a;
}

return result;
}

var powResult = pow(x, n);

console.log(powResult);