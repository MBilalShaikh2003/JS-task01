var a="Counting"
document.write(a)
for(var i=1;i<=15;i++){
    document.write(i+",")
}
document.write("<br>")
document.write("Reverse counting:")
for(var i=15;i>=1;i--){
    document.write(i+",")
}

document.write("<br>")
document.write("Even:")
for(var i=1;i<=15;i++){
    if(i%2==0){
    document.write(i+",")
}
}
document.write("<br>")
document.write("Odd:")
for(var i=1;i<=15;i++){
    if(i%2!=0){
    document.write(i+",")
}
}
document.write("<br>")
document.write("Series:")
for(var i=1;i<=20;i++){
    if(i%2==0){
    document.write(i+"k"+" ,")
}
}
document.write("<br>")