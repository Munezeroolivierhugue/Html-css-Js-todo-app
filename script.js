const toDo = document.getElementById("todo-input")
const button = document.getElementById('add-todo')
let list = document.createElement('ul')

button.addEventListener('click',addlist = () =>{
    let listItem = document.createElement('li')

    alert(toDo.value + " Added Successfully")
    listItem.textContent = toDo.value
    console.log(listItem)
    list.appendChild(listItem)
    document.body.appendChild(list)
    toDo.value = ''
})