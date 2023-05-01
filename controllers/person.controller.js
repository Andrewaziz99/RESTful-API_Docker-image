const Person = require('../models/personModel');

const create = (req, res) => {
    res.render("addPerson");
  };

const addPerson = async (req, res) => {
    let person = req.body;
    let newPerson = new Person(person);
    await newPerson.save();
    // res.render("addPerson", { Person: person });
    res.redirect("/persons");
  };
  
  const update = async (req, res) => {
    console.log("updating");
    let { id } = req.body;
    // await Person.updateOne({ 
    //   name:req.body.name,
    //   age:req.body.age,
    //   gender:req.body.gender,
    //   email:req.body.email
    // }, { where: { id: id } });

    await Person.findOneAndUpdate({id:id}, {
      name:req.body.name,
      age:req.body.age,
      gender:req.body.gender,
      email:req.body.email
    });
    console.log(req.body);
      res.redirect("/persons");
  };


  
  const show = async (req, res) => {
    const persons = await Person.find({});
    res.render("persons", {Person: persons});
  };

  const deletePerson = async (req, res) => {
    console.log("delete");
    const { id } = req.params;
    await Person.findOneAndDelete({id:id});
    res.redirect("/persons");
  };
  
  module.exports = {
    addPerson,
    update,
    show,
    create,
    deletePerson
  };






//   const User = require("../db/db.model");

// const addUser = async (req, res) => {
//   let user = req.body;
//   let newUser = new User(user);
//   await newUser.save();
//   res.json({ message: "user added" });
// };

// const update = async (req, res) => {};

// const show = async (req, res) => {
//   const users = await User.find();
//   res.render("home", {model: users});
// };

// module.exports = {
//   addUser,
//   update,
//   show,
// };