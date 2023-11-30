var username,phonenumber,email,password,confirmpassword;
 username=prompt("Enter your name ");
 if(username==""){
    alert("error please fill in the input");
    username=prompt("Enter your name ");

 }
 phonenumber=+prompt("Enter your phonenumber ");
 if(phonenumber==""){
    alert("error please fill in the input");
    phonenumber=prompt("Enter your phonenumber ");

 }
 email=prompt("Enter your email ");
 if(email==""){
    alert("error please fill in the input");
    username=prompt("Enter your email ");

 }
 password=prompt("Enter your password ");
 if(password==""){
    alert("error please fill in the input");
    username=prompt("Enter your password ");

 }
 confirmpassword=prompt("Enter your password again to confirm ");
 if(username==""){
    alert("error please fill in the input");
    username=prompt("Enter your password again to confirm ");

 }
 if(password==confirmpassword){
    alert("you are successfully registered")
 }
 else{
    alert("your password should be the same")
 }