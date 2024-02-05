function setbackground(){
    var bg=document.getElementById("postbackground");
    bg.style.backgroundImage='url('+event.target.src +')';
}
function changecolor(){
    var text=document.getElementById("text-area");
    text.style.color=event.target.value;
}
function changestyle(){
    var text=document.getElementById("text-area");
    var type=event.target.innerText
    if(type==="B"){
        if(text.style.fontWeight==="bold"){
            text.style.fontWeight="normal"
        }else{
        text.style.fontWeight="bold"
    }
}
if(type==="I"){
    if(text.style.fontStyle==="italic"){
        text.style.fontStyle="normal"
    }else{
    text.style.fontStyle="italic"
}
}
if(type==="U"){
    if(text.style.textDecoration==="underline"){
        text.style.textDecoration="normal"
    }else{
    text.style.textDecoration="bold"
}
}
}
function changefontsize(){
    var text=document.getElementById("text-area");
    text.style.fontSize=event.target.value +"px";
}
function createpost(){
    var item=document.getElementById("items")
    item
}


