var a=2,b=1;
document.write("the value of a is "+a+"<br>")
document.write("the value of b is "+b+"<br>")
var result = --a - --b + ++b + b--;
//--a a becomes 1
//--b b becomes 0
//--a - --b the result is 1
//++b now b becomes 1
// (--a - --b)+ ++b now result becomes 2
//(--a - --b)+ ++b +b-- now result becomes 3
document.write("the value of a is "+a+"<br>")
document.write("the value of b is "+b+"<br>")
document.write("the value after operation is "+ result)