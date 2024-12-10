 var AddTask = document.querySelector("button");
 var InputButton = document.querySelector("input");
 var myUl = document.querySelector("ul");


 AddTask.addEventListener("click",function(){
    
    var enteredTask = InputButton.value;// get value which entered in input box 

    // myList.textContent = enteredTask ;  // replace the entered task in li 

   var myList =document.createElement("li"); // create li element 
   // style



   myList.innerHTML = `${enteredTask} <button class="deleteBtn">X</button>` ; // delete the task 

   // myList =  display the code on Browser 

   // myList = appent  it in index.html

   myUl.append(myList);

   InputButton.value = " "; // logic to clear the input

      var myDelete = myList.querySelector(".deleteBtn"); // delete li task 
      myDelete.style.margin="10px",

   myDelete.addEventListener("click", function(){
     myList.remove()
   })


 })
