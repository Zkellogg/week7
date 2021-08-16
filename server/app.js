const express = require('express')
const app = express()
const cors = require('cors')

let todoList = [
    
    {
    id: 1,
    title: 'clean fridge',
    priority: 'low',
    date: '08-16-2021'},
    {
    id: 2,
    title: 'clean room',
    priority: 'high',
    date: '08-16-2021'  
    }
]

app.use(cors())
app.use(express.json())

app.get("/", (req,res) => {
    res.json(todoList)
})

app.post("/", (req,res) => {
    const id = length(todoList)
    const title = req.body.title
    const priority = req.body.priority
    const date = req.body.date

    const todoItem = {id: id, title: title, priority: priority, date: date}
    todoList.push(todoItem)


    res.json({sucess: true})


})

app.delete("/:id", (req,res) => {
 const{id} = req.params
 const deleted = todoList.find(item => item.id == id)
 if (deleted){
todoList = todoList.filter(item => item.id !== id)
 } else {
    res.json({message: "Item does not exist"})
 }
})




app.listen(3000, () => {
    console.log('Server is running...');
})


