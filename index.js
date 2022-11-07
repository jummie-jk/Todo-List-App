
let form = document.getElementById("form");
let listcon = document.getElementById("todo__list")
let input = document.getElementById("todo__input")


// To select all the buttons and add an eventlistener to each button
function selectButtons(){
    let collectButtons = document.querySelectorAll(".delete__btn")
    let lastButton = collectButtons[collectButtons.length - 1]
    lastButton.addEventListener("click", onDelete)
    
    let collectEditButtons = document.querySelectorAll(".edit__btn")
    let lastEditButton = collectEditButtons[collectButtons.length - 1]
    lastEditButton.addEventListener("click", onEdit)
}

// This function is activated when the todo is being submitted
function onFormSubmit(todo){
    let li = document.createElement("li")
    li.classList.add("todo__section--todoItem") 
    li.innerHTML = `
    <div class= "div-main-wrapper">
        <input class="todo__checkbox" type="checkbox" />
        <span class="todo__text"> ${todo} </span>
        <div class="todo__actions--wrapper">
            <button id="edit_btn" class="todo__actions edit__btn">edit</button>
            <button id="delete_btn" class="todo__actions delete__btn">delete</button>
        </div>
    </div>
    `
    listcon.appendChild(li)
    selectButtons()
    }

// to delete the input when the delete button is clicked
function onDelete(event){
let buttonClicked = event.target
let li = buttonClicked.parentNode.parentNode.parentNode
li.remove()
}

// to edit an imput after being typed
function onEdit(event){
let editButtonClicked = event.target
let li = editButtonClicked.parentNode.parentNode.parentNode
let deletebtn = li.childNodes[1].childNodes[5]
let child = li.childNodes[1].childNodes[3].innerHTML
input.value = child
let newbtn = document.createElement("button")
newbtn.innerHTML = `Done`
newbtn.classList.add("doneBtn")
li.append(newbtn)
editButtonClicked.disabled = true
newbtn.addEventListener("click", doThis)
function doThis(){
let spanny = li.childNodes[1].childNodes[3]
spanny.innerHTML = input.value
console.log(spanny.innerHTML)
input.value = ""
editButtonClicked.disabled = false
newbtn.remove()
}
}


function clean(){
input.value = " "
}

function onFormSubmitHandler(e){
e.preventDefault();
let inputValue = input.value
onFormSubmit(inputValue)
input.value = " "
}

let clearbtn = document.querySelector(".clear")
function clearUp(){
input.value = " "
}
clearbtn.addEventListener("click", clearUp)
form.addEventListener("submit", onFormSubmitHandler)