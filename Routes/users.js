const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let users = []

router.get('/',(req,res)=>{
    res.send(users);
});

router.post('/',(req,res)=>{
    const user = req.body;
    const userwithId = {...user,id:uuidv4()}
    users.push(userwithId);
    res.send(`user with ${user.firstName} has pushed`);
});

router.get('/:id',(req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user)=>user.id === id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    users = users.filter((user)=> user.id !== id);
    res.send(`user with ${id} was deleted`);
});

router.patch('/:id',(req,res)=>{
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user= users.find((user)=>user.id === id);
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

})

module.exports = router;