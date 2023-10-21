x=prompt("Enter 1 subject name")
y=prompt("Enter 2 subject name")
z=prompt("Enter 3 subject name")
var total=100;
var a,b,c;
a=+prompt("Enter 1 subject marks")
b=+prompt("Enter 2 subject marks")
c=+prompt("Enter 3 subject marks")
var per1=(a/total)*100;
var per2=(b/total)*100;
var per3=(c/total)*100;
var per=(per1+per2+per3)/3;
document.write("Subject  Totalmarks  Obtainedmarks  Percentage <br>")
document.write(  x+"&nbsp&nbsp"+"&nbsp&nbsp"+total+"&nbsp&nbsp"+a+"&nbsp&nbsp"+per1 +"<br>")
document.write(  y+"&nbsp&nbsp"+"&nbsp&nbsp"+total+"&nbsp&nbsp"+b+"&nbsp&nbsp"+per2 +"<br>")
document.write(  z+"&nbsp&nbsp"+"&nbsp&nbsp"+total+"&nbsp&nbsp"+c+"&nbsp&nbsp"+per3 +"<br>")
document.write(  "your percentage is"+per+"<br>")