var num1 = prompt("첫 번째 수: ");
var num2 = prompt("두 번째 수: ")
var sum = parseInt(num1) + parseInt(num2)

document.write(num1+"과 "+num2+"를 더하면 <br>");
document.write(sum+ "입니다. <br>");


function test(){
    var number=10;
}
number = 20;
test();
document.write("최종숫자는 " + number + "입니다. ");

var a=10, b=4;
resl = a+b;
res2 = a-b;
res3 = a*b;
res4 = a/b;
res5 = a%b;

document.write("10 + 4 = " + resl + "<br><br>");
document.write("10 - 4 = " + res2 + "<br><br>");
document.write("10 * 4 = " + res3 + "<br><br>");
document.write("10 / 4 = " + res4 + "<br><br>");
document.write("10 % 4 = " + res5 + "<br><br>");


var c=10, d=10;
document.write("a = "+c+"<br>");
document.write("++a = "+(++c)+"<br>");
document.write("a++ = "+(c++)+"<br>");
document.write("d = "+d+"<br>");
document.write("d-- = "+(d--)+"<br>");
document.write("--d = "+(--d)+"<br>");