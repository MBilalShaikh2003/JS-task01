var x=+prompt("enter the number")

var i;
var prod=1;
document.write("Table of "+x+ "<br>");
for(i=1;i<=10;i++){
    prod=x*i;
    document.write(x+"x" +i+"="+prod+"<br>");
}