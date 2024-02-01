function storeDate(){
var dateInput = document.getElementById('inputDate');
var inputValue = dateInput.value;
var dob=new Date(inputValue).getTime();
var currentdate=new Date().getTime();
var diff=currentdate-dob;
var year=Math.floor( diff/31536000000);
console.log(year)

function getyear(){
    var dob=new Date(inputValue).getTime();
    var currentdate=new Date().getTime();
    var diff=currentdate-dob;
    var year=Math.floor( diff/31536000000);
    
    return year;
}
document.getElementById("demo").innerHTML=getyear();
function getmonth(){
    var dob=new Date(inputValue).getTime();
    var currentdate=new Date().getTime();
    var diff=currentdate-dob;
    var month=Math.floor(diff/(1000*60*60*24)%12);
    //console.log(month)
    return month;
}
document.getElementById("demo1").innerHTML=getmonth();
function getday(){
    var dob=new Date(inputValue).getTime();
    var currentdate=new Date().getTime();
    var diff=currentdate-dob;
    var day=Math.floor(diff/(1000*60*60*24)%365);
    //console.log(day)
    return day;
}
document.getElementById("demo2").innerHTML=getday();
}