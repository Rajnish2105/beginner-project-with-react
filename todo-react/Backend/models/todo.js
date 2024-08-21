const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: String,
    completed: Boolean
})

module.exports = mongoose.model("Todo", todoSchema);