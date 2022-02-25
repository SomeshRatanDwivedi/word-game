var words = ["somesh", "apple", "ball", "cat", "dog", "elephant", "fish", "green"];

var n = getRandom();


function getRandom() {
    var n = Math.floor((Math.random()) * 8);
    var inputbox = document.getElementById("game");
     inputbox.innerHTML = "<h1>" + words[n] + "</h1>";
    
}
var element = document.getElementById('game');
var x = 1;
function startAnim() {
    element.style.top = x + "px";
    
    x++;
    if(x==450){
      x=10;
      Result(element.innerText);
      getRandom();
      
    }
    
    window.requestAnimationFrame(startAnim);
}
window.requestAnimationFrame(startAnim);

var userInput=document.getElementById("input");
function Result(gameWord){
   var userValue=userInput.value;
   if(userValue===gameWord)
   {
       var correct=document.getElementById("correct");
       correct.innerHTML+="<h1>"+userValue+"</h1";

   }
   else
   {
    var wrong=document.getElementById("wrong");
    wrong.innerHTML+="<h1>"+userValue+"</h1";  
   }

}