

function getyear(){
    var dob=new Date("2 september,2003").getTime();
    var currentdate=new Date().getTime();
    var diff=currentdate-dob;
    var year=Math.floor( diff/31536000000);
    return year;
}
function getmonth(){
    var dob=new Date("2 september,2003").getTime();
    var currentdate=new Date().getTime();
    var diff=currentdate-dob;
    var month=Math.floor(diff/(1000*60*60*24)%12);
    return month;
}
function getday(){
    var dob=new Date("2 september,2003").getTime();
    var currentdate=new Date().getTime();
    var diff=currentdate-dob;
    var day=Math.floor(diff/(1000*60*60*24)%365);
    return day;
}