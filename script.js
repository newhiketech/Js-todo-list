const inputBox=document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');


let editTodo = null;

let addTodo = ()=> {
    const inputText= inputBox.value.trim();
    if(inputText.length <= 0){
        alert("you must to write anything")
        return false;
    }
     
    if(addBtn.value === 'Edit'){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value ='Add';
        inputBox.value = "";
    }
    else{

    // create p tag

    const li =document.createElement('li');
    const p =document.createElement('p');
    p.innerHTML=inputText;
    li.appendChild(p)

    // create Edit button 
    let editBtn = document.createElement('button');
    editBtn.innerText="Edit"
    editBtn.classList.add('btn', 'editbtn')
    li.appendChild(editBtn)

    // create delete button 

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText="Delete"
    deleteBtn.classList.add('btn', 'deletebtn')
    li.appendChild(deleteBtn)

    todoList.appendChild(li)

    inputBox.value ="";

    }
}
 let updateTodo = (e)=>{
    if(e.target.innerHTML === 'Delete'){
    // console.log(e.target.parentElement);
    todoList.removeChild(e.target.parentElement)
    }

    if(e.target.innerHTML === 'Edit'){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value ='Edit'
        editTodo=e;
    }
 }

addBtn.addEventListener("click", addTodo)
todoList.addEventListener("click", updateTodo)