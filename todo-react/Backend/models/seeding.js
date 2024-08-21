const Todo = require("./todo")
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/TodoList'
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

async function seedTododb() {
    await Todo.insertMany([
        { text: "Do the dishes", completed: false },
        { text: "Take out the trash", completed: true },
        { text: "Finish the project", completed: false },
    ]);
}

seedTododb()
    .then(() => {
        //close the connection after the work is done.
        mongoose.connection.close();
    })