var arr = [];

for ( var i = 0; i < 5; i++) {
    arr[i] = prompt('������� ��� ������������');
}

console.log(arr);

var userName = prompt('������� ���� ���');
var flag = false;

for ( var i = 0; i < arr.length; i++) {
    if (arr[i] === userName){
        flag = true;
    }
}

if (flag) {
    alert(userName + '����, �� ������� �����');
}else {
    alert(userName + '������ ������������ �� ����������');
}