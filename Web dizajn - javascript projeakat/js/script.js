const notes = document.getElementsByClassName('notes')[0];
const pencil = document.getElementById("pencil");
const beleske = document.getElementById("notesItems");
const userInput = document.getElementById("inputField");
const eraser = document.getElementById("eraser");

eraser.addEventListener("click", function(){
    beleske.innerHTML = "";
})

userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
})

 function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;
    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    
    })

   beleske.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
 }
    

