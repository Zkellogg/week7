



const titleInput = document.getElementById("titleInput")
const priorityInput = document.getElementById("priorityInput")
const dateInput = document.getElementById("dateInput")
const todoDiv = document.getElementById("todoDiv")
const submitButton = document.getElementById("submitButton")
// const deleteButton = document.getElementById("deleteButton")

function getTodoList(){
fetch('http://localhost:3000')
    .then(response => response.json())
    .then(todoList => {
       const todoItems = todoList.map((item, index) => {
            return `
            <ul>
            <li>id: ${item.id}</li>
            <li>Title: ${item.title}</li>
            <li>Priority: ${item.priority}</li>   
            <li>Date Added: ${item.date}</li>
            <button id="deleteButton" onclick='deleteItem()'>Delete</button> 
            </ul>
            `
           
        })
        
        todoDiv.innerHTML = todoItems.join("")
    })
    
}

getTodoList()

submitButton.addEventListener("click", function(event){
    event.preventDefault()
    const title = titleInput.value
    const priority = priorityInput.value
    const date = dateInput.value

    console.log(title);

    fetch('http://localhost:3000',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            priority: priority,
            date: date
        })
}).then(response => response.json())
.then (result => {
    getTodoList()
})
})

function deleteItem(){

    // fetch ('http://localhost:3000/:item',{
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         title: this.title,
    //         priority: this.priority,
    //         date: this.date
    //     })
    // })
}


//  const title = titleInput.value
//     const priority = priorityInput.value
//     const date = dateInput.value

