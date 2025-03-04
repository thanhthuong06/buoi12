// var fullName = "Nguyễn Văn A";
// var FullName = "Nguyễn Văn A";
// Phân biệt chữ hoa chữ thường do đó 2 biến trên khác nhau
// Khai báo biến thường không viết hoa chữ cái đầu tiên
// 3 cách khai báo biến 
// khi khai báo biến cần phải gắn giá trị cho biến
// var fullName = "Nguyễn Văn A";
// var age = 20;
// // let age = 10;
// // const age = 30;
// // const thường dùng để khai báo hằng số
// var isTrue = true;
// // var xinchao = "xin chào mọi người"
// let xinchao = "xin chào bằng let";
// if (isTrue){
//     xinchao = "xin chào các bạn";
// }
// console.log(xinchao)
var age = 20
// console
// build - in
console.log(age);
console. error("Error" + age);
console.warn("Warning" + age);
// thông báo ra màn hình
// alert("Thông báo js")
// prompt("Nhập vào tuổi của bạn")
// confirm("Bạn có muốn tiếp tục?")
/* comment 1 đoạn
*/
document.getElementById("text").innerHTML = "Hello các bạn";
// đưa dữ liệu ra bên ngoài
// Toán tử ở js
/* Toán tử một ngôi
phép thuận +x
phép đối -x
phép phủ định !x */
// trefix và postfix
// var a = 6;
// var b = a++; 
// trefix tiền tố
// var c = ++a;
// postfix hậu tố 
// Tăng lên 1 đơn vị; -- trừ đi 1 đơn vị
// var sum = a++ + ++a
// Việc 1: gán a' = a = 6
// Việc 2: tăng a lên 1 đơn vị a = 7
// Việc 3: lúc này trả về biến b = 6
// console.log(b)
// console.log(c)
// console.log(sum)
// b = a++;
// việc 1: cộng a lên 1 đơn vị a = a+1 = 7
// Việc 2: Trả về giá trị b = 7
// console.log(b)
// console.log(a)
// Việc 1: tạo ra a' = a = 6
// Việc 2 Tăng a lên 1 đơn vị a = 7
// Việc 3: Trả về biến b = a'
// Toán tử 2 ngôi
/*
var sum = a+b;
var minus = a-b;
var multiply = a*b;
var divide = a/b;
var luy_thua = a**b;
console.log(sum);
console.log(minus);
console.log(multiply);
console.log(divide);
console.log(luy_thua);
let max = (a>b) ? a:b;
if (a>b){
    max = a
}
else{
    max = b
}
var x = 10;
*/
// x %=3; 
// x - 5
// %= lấy phần dư
/*
== so sánh bằng
!= so sánh không bằng
>= lớn hơn bằng
<= nhỏ hơn bằng
*/
// console.log(x)
/*
var a = 10;
b=10;
if (a%2==0) {
    console.log("a là số chẵn");
}
else{
    console.log("a là số lẻ");
}
*/
// var m;
// console.log(m)
// var x=5
// if (m){
//     console.log("in ra màn hình")
// }
// else{
//     console.log("không in ra")
// }
// bài 1
var x = 5; 
var y = "xin chào các bạn";
var m = false;
var arr = [ 1,2,3,4];
// bài 2
var a = 10;
var b = 5;
var sum = a + b;
var minus = a-b;
var multiply = a*b;
var divide = a/b;
console.log(sum);
console.log(minus);
console.log(multiply);
console.log(divide);
// bài 3
function sumHaiSo(a,b){
    return a+b
}
console.log(sumHaiSo(1,3))
// bài 4
function isEven(z){
    if (z%2==0){
        console.log(z, "là số chẵn")
    }
    else{
        console.log( z,"không phải số chẵn")
    }
}
console.log(isEven(20))
// bài 5
c = 18
if (c-10>0){
    console.log(c,"Là số lớn hơn 10")
}
else{
    console.log(c,"là số nhỏ hơn 10")
}
// bài 6
