var num=34.36
var str=num.toString();
document.write("Number="+num+"<br>")
document.write("String="+str)
console.log(typeof str)
for(var i=0;i<str.length;i++){
    if(str[i]==="."){
        str.splice(i,1);
        console.log(str)
        break;
    }
}
document.write("String="+str)