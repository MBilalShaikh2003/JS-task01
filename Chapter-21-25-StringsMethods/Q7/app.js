var a="Hyderabad";
var replace="Islam"
for(var i=0;i<a.length;i++){
if(a.slice(i,replace.length)==="Hyder"){
    var d=replace+a.slice(replace.length,a.length)
    console.log(d)
    break;
}
}
document.write("Before Replacement:"+a+"<br>");
document.write("After Replacement:"+d);