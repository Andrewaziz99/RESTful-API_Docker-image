const mongoose = require('mongoose');

// const personSchema = mongoose.Schema({

//     _id: mongoose.Schema.Types.ObjectId,
//     name: { String, required: [true, "Name is required"] },
//     age: { Number, required: [true, "Age is required"] },
//     gender: { String, required: [true, "Gender is required"] },
//     email: { String, required: [true, "Email is required"] }
// });

const personSchema = mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    gender: String,
    email: String
},
    {
        timestamps: true
    });

const Person = mongoose.model('Person', personSchema);

module.exports = Person;