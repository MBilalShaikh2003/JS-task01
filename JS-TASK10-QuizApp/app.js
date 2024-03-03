function login(){
    var email=document.getElementById("exampleInputEmail1");
    var password=document.getElementById("exampleInputPassword1");
    if (email !== "" && password !== "") {
        // If login is successful, hide login form and show content
        document.getElementById("forms").style.display = "none";
        document.getElementById("cardbox").style.display="flex";
    } else {
        alert("Please enter both username and password.");
    }
}
function letgo(){
    document.getElementById("cardbox").style.display="none";
    document.getElementById("content").style.display="flex"

}