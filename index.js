const express = require("express");
const app = express();
const cors = require("cors");
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res)=>{
    res.send("Look mama I can code Node Now. auto restart with nodemon")
})

const users =[
    {id:1, name:"Asabana", email: "asabana@gmail.com", phone: "01714212710"},
    {id:2, name:"Bsabana", email: "bsabana@gmail.com", phone: "01714212710"},
    {id:3, name:"Csabana", email: "csabana@gmail.com", phone: "01714212710"},
    {id:4, name:"Dsabana", email: "dsabana@gmail.com", phone: "01714212710"},
    {id:5, name:"Esabana", email: "esabana@gmail.com", phone: "01714212710"},
    {id:6, name:"Fsabana", email: "fsabana@gmail.com", phone: "01714212710"},
    {id:7, name:"Gsabana", email: "gsabana@gmail.com", phone: "01714212710"},
]

 app.get("/users", (req,res)=>{
    if(req.query.name){
   const search = req.query.name.toLocaleLowerCase();
const matched = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
res.send(matched);
    }
    else{
        res.send( users )
    }
   
 });

 app.get("/user/:id", (req, res)=>{
   console.log(req.params);
   const id = parseInt(req.params.id);
   const user = users.find(u =>u.id === id);
   res.send(user)
 })
 app.post("/user", (req, res) =>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
 })

 app.get("/fruits", (req,res)=>{
    res.send(["mango", "apple", "oranges"])
 })

 


 app.get("/fruits/mango/fazle", (req,res)=>{
    res.send("sour sour fazli flavor")
 })

app.listen(port, ()=>{
    console.log("Listing to port", port);
});