//palindrome words
var data="";
var input=prompt("Enter a word ")
for(i=input.length;i>=0;i--){
    data+=input[i];
    
}
//document.write(input)
//document.write(data)
if(input==data){
    document.write(input+" is a palindrome word")
}
else{
    document.write("Not a palindrome")
}