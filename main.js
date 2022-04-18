
const textArea = document.getElementById('textarea');
const Addtext = document.getElementById('add');
const todoContainer = document.querySelector('.todo-container');



Addtext.addEventListener("click", addList);

function addList(){
    let textValue = textArea.value;
    if(textValue.length > 0){
   const todoitem = document.createElement("div");
   todoitem.className = "todoitem";
   const paragraph = document.createElement("p");
   paragraph.className = "todotext";
   paragraph.innerText = textValue;

   const button = document.createElement("button");
   button.className = "delete";
   const icon = document.createElement("i");
   icon.className = "fa-solid fa-trash-can";
   button.appendChild(icon);

   todoitem.append(paragraph, button);
   todoContainer.appendChild(todoitem);

   button.onclick =()=>{
       todoitem.remove();
   }

    }else alert('input text');
}

