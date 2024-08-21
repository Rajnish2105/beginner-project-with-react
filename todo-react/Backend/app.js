const express = require("express");
const cors = require('cors');
const app = express();
const Todo = require('./models/todo')
const mongoose = require('mongoose');

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/TodoList'
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get('/', async (req, res, next) => {
    const allTodos = await Todo.find();
    res.json(allTodos)
})

app.post('/', async (req, res, next) => {
    const data = await Todo(req.body);
    await data.save()
    res.send("Todo Created")
})

app.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id)
    const allTodos = await Todo.find();
    res.json(allTodos)
})

app.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.completed = !todo.completed;
    await todo.save();
    const allTodos = await Todo.find();
    res.json(allTodos)
})

PortNumber = process.env.PortNumber || 3000;
app.listen(PortNumber, () => {
    console.log(`Server active at Port : ${PortNumber}`);
})