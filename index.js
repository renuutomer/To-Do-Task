var buttonSubmit=document.querySelector('.input-text-container button')
var inputField=document.querySelector('.input-text-container .input-text')

buttonSubmit.addEventListener('click',addTodo);
function addTodo(){
    if(inputField.value==""){
        alert("The field can't be empty!")
        return;
    }
    var todoContent=inputField.value;
    var nodeTodo=document.createElement('div');
    nodeTodo.classList.add('todo-content')
    var appendNode=document.querySelector('.to-do-task');
    nodeTodo.innerHTML=
    `
        <div>
            <h3>${todoContent}</h3>
        </div>
        <button class="update-button">Edit</button>
        <button class="remove-button">Done</button>
    `
    appendNode.append(nodeTodo);
    addEveLisRem();
    childrenNumber();
    //nodeTodo.querySelector('.remove-button').addEventListener('click',removeTodo);
    inputField.value="";
}


function addEveLisRem(){
    var removeBtn=document.querySelectorAll('.remove-button');
    var updateButton=document.querySelectorAll('.update-button')
    for(var i=0;i<removeBtn.length;i++){
        var button=removeBtn[i];
        button.addEventListener('click',removeTodo);
    }
    for(var i=0;i<updateButton.length;i++){
        var button=updateButton[i];
        button.addEventListener('click',updateTask);
    }
}

function childrenNumber(){
    var todoOutput=document.querySelector("#items")
    var appendNode=document.querySelector('.to-do-task');
    todoOutput.textContent=appendNode.children.length;
}

function removeTodo(event){
    var todoOutput=document.querySelector("#items")
    var appendNode=document.querySelector('.to-do-task');
    var removeNode=event.target;
    removeNode.parentElement.remove();
    var value=(appendNode.children.length)
    todoOutput.textContent=value;
}

function updateTask(event){
   let parentElement=event.target.parentElement;
   let editValue=parentElement.children[0].children[0].textContent;
   parentElement.remove();
   inputField.value=editValue;
   console.log(editValue)
}