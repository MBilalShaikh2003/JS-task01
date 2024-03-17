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
    document.getElementById("quizcontainer").style.display="block"

}
const quiz=[

    {
      question:"Which keyword is used to declare a function in JavaScript?",
      option1text: "func",
      option2text: "function",
      option3text: "def",
      option4text: "console",
      answer: "function"
    }, 
    {
      question:"What is the correct way to write a comment in JavaScript?",
      option1text: "/* This is a comment */",
      option2text: "// This is a comment //",
      option3text: "* This is a comment *",
      option4text: "/* This is a comment //",
      answer: "/* This is a comment */",
    }, 
  
    {
      question:"Which operator is used to concatenate two strings in JavaScript?",
      option1text: "+",
      option2text: "-",
      option3text: "%",
      option4text: "*",
      answer: "+",
    } 
  ]  
  const question=document.getElementById("quiz-question");
   console.log(question)
   console.log(question.textContent)
   const optiona=document.getElementById("text-a")
   const optionb=document.getElementById("text-b")
   const optionc=document.getElementById("text-c")
   const optiond=document.getElementById("text-d")
   console.log(optiona)
   console.log(optiona.textContent)
  const submit=document.getElementById("submit")
   let currquestion=0;
   let score=0;
   question.textContent=quiz[currquestion].question;
   optiona.textContent=quiz[currquestion].option1text;
   optionb.textContent=quiz[currquestion].option2text;
   optionc.textContent=quiz[currquestion].option3text;
   optiond.textContent=quiz[currquestion].option4text;
   const answerelement=document.querySelectorAll(".answers")
   console.log(answerelement)

   submit.addEventListener("click", () => {
      const checkedAns=document.querySelector('input[type="radio"]:checked')
      //console.log(checkedAns.nextElementSibling.textContent)
      if(checkedAns===null){
        alert("select a option")
      }
      else{
        if(checkedAns.nextElementSibling.textContent===quiz[currquestion].answer){
            score++;
        }
        
        currquestion++;
        if(currquestion<quiz.length){

            question.textContent=quiz[currquestion].question;
            optiona.textContent=quiz[currquestion].option1text;
            optionb.textContent=quiz[currquestion].option2text;
            optionc.textContent=quiz[currquestion].option3text;
            optiond.textContent=quiz[currquestion].option4text;
            checkedAns.checked=false;
        }
        else{
            alert("your score is"+score+"out of"+quiz.length)
        }
      }
   })