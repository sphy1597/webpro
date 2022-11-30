var msg1="컴퓨터공학과 자리배치도입니다."
var msg2 = "자신의 번호가 적힌 자리에 앉아야 출석체크 됩니다."

alert(msg1);
alert(msg2);

var reply = confirm("자리 배치도를 확인하겠습니까 ?");
if(reply == true)
    document.write("이제부터자리 배치도를 보여줄 프로그램을 짜보도록 하겠습니다.");
else
    document.write("더 이상 보여줄게 없습니다. ");


var sum = 0;


document.write("<br><hr>");

for ( i = 1; i <= 10 ; i++){
    sum += 1;
    document.write(i + "---------------------" + sum + "<br>");
}


document.write("<br><hr>");

function changeTo(myImg){
    var myNum = document.getElementById("num");
    myNum.src = myImg;
}

function calcSum(num){
    var sum = 0;
    for(i = 1; i <= num ; i++)
        sum += i;
    return sum;
}

function displaySum(num){
    returnValue = calcSum(num);
    alert(num + "까지 더한 값은 " + returnValue + "입니다.");
}



var today=new Date();
var display = today.toLocaleString();
document.write("<h1>오늘은 며칠인가요?</h1>");
document.write(display + "입니다.");



myImg = document.getElementById("logo");
document.write("<p>이미지 파일의 alt 텍스트는 <span>" + myImg.alt + "</span>입니다.<p>")


myList = document.getElementById("accent");
document.write("<hr>");
document.write("<h3>accent 클래스를 사용하는 요소의 텍스트</h3>");
for( i = 0 ; i < myList.length ; i++)
    document.write(myList[i].textContent + "<br>");

letters = document.getElementsByTagName("img");

function change(myImg){
    var myNum = document.getElementById("html");
    myNum.src = myImg;
}

var txt = document.getElementById("quest").innerHTML;
document.write("질문의 내용 : " + txt);

function modifySol(newSol){
    document.getElementById("sol").innerHTML = newSol;
}

function changeTo2(myImg){
    document.getElementById("num2").src = myImg;
}

function changeStyle(){
    var myArea = document.getElementById("first");
    myArea.style.backgroundColor = "#222";
    myArea.style.color = "white";
    myArea.style.borderRadius = "80px";

}

function addParagraph(){
    var newP = document.createElement("p");
    var pNode = document.createTextNode("최신 웹 기술을 함께 공부할 회원을 모집합니다.");
    newP.appendChild(pNode);
    document.getElementById("info").appendChild(newP);
}

function addImage(){
    var newImg = document.createElement("img");
    var attrNode = document.createAttribute("src");
    attrNode.value = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png";
    var altNode = document.createAttribute("alt");
    altNode.value="html5 공식로고";
    newImg.setAttributeNode(attrNode);
    newImg.setAttributeNode(altNode);
    document.getElementById("info2").appendChild(newImg);
}