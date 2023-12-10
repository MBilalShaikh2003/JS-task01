
var num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var odd=[]
var even=[]
for(var i=0;i<num.length;i++){
    if(num[i]%2==0){
        even+=num[i];
        even+=","
    }
    else{
        odd+=num[i];
        odd+=","
    }
}
document.write("<h1>Odd numbers:</h1>")
document.write(odd)
document.write("<h1>Even numbers:</h1>")
document.write(even)