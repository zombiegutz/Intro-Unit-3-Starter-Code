/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening=document.querySelector(".story-opening");
let optionOneScreen=document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");
let optionOne=document.querySelector(".option-one")
let optionTwo=document.querySelector(".option-two")
let title=document.querySelector(".title")
let picklerick=document.querySelector(".picklerick")
let superman=document.querySelector(".superman")
let reset1=document.querySelector(".reset1")
let reset2=document.querySelector(".reset2")

 // When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
   
optionOne.onclick=function(){
optionOneScreen.style.display="block"
  storyOpening.style.display="none"
  title.style.display="none"
  optionOne.style.display="none"
  optionTwo.style.display="none"
};

optionTwo.onclick=function(){
optionTwoScreen.style.display="block"
    storyOpening.style.display="none"
  title.style.display="none"
  optionOne.style.display="none"
  optionTwo.style.display="none"
};


picklerick.onmouseover=function(){
  optionOneEnd.style.display="block"
   optionOneScreen.style.display="none"
  
  
};

superman.onclick=function(){
  optionTwoEnd.style.display="block"
  optionTwoScreen.style.display="none"
}

title.onmouseover=function(){
  title.innerHTML="DONT DIE!"
}

reset1.onclick=function(){
  title.style.display="block"
  storyOpening.style.display="block"
  optionOne.style.display="block"
  optionTwo.style.display="block"
  optionOneEnd.style.display="none"
}

reset2.onclick=function(){
  title.style.display="block"
  storyOpening.style.display="block"
  optionOne.style.display="block"
  optionTwo.style.display="block"
  optionTwoEnd.style.display="none"
}