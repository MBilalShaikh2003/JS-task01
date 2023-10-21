var x=10;
a=+prompt("Guess the number");
if(x==a){
document.write("Bingo! you got it right")
}
else{
if(a==--x || a==++x){
    document.write("you are very close")
}
else{
    document.write("Try again")
}
}