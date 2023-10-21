document.write("<h1>Marksheet</h1><br>");
var x=300;
a=+prompt("Enter mark of subject1");
b=+prompt("Enter mark of subject2");
c=+prompt("Enter mark of subject3");
var obt=a+b+c;
per=((a+b+c)/x)*100
document.write("<b>Total marks=</b>"+x+"<br>");
document.write("<b>obtained marks=</b>"+obt+"<br>");
document.write("<b>Percentage=</b>"+per+"<br>");
document.write("<b>Remarks=</b>");
if(per>=80){
    document.write("Excellent")
}
if(per>=70 && per<80){
    document.write("GOOD")
}
if(per>=60 && per<70 ){
    document.write("Need to improve")
}
if(per<60){
    document.write("fail")
}