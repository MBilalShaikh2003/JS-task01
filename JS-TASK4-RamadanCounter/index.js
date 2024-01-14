//var date=new Date()
function getDay(){
    var firstramadan=new Date("10 March,2024").getTime();
    var currentdate=new Date().getTime();
    var diff=firstramadan-currentdate;
    var day=Math.floor(diff/(1000*60*60*24));
    return day;
    }
        document.getElementById("demo").innerHTML = getDay();

function gethour(){
    var firstramadan=new Date("10 March,2024").getTime();
    var currentdate=new Date().getTime();
    var diff=firstramadan-currentdate;
    var hour=Math.floor(diff/(1000*60*60))
    return hour
}
document.getElementById("demo1").innerHTML=gethour()

function getminute(){
    var firstramadan=new Date("10 March,2024").getTime();
    var currentdate=new Date().getTime();
    var diff=firstramadan-currentdate;
    var minute=Math.floor(diff/(1000*60))
    return minute
}
document.getElementById("demo2").innerHTML=getminute()

function getsecond(){
    var firstramadan=new Date("10 March,2024").getTime();
    var currentdate=new Date().getTime();
    var diff=firstramadan-currentdate;
    var sec=Math.floor(diff/(1000))
    return sec
}
document.getElementById("demo3").innerHTML=getsecond()



//var minute=Math.floor(diff/(1000*60))
//var second=Math.floor(diff/(1000))

