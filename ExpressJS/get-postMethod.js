const express = require('express');
const {people} = require("./data");

const app = express();

// static assets
app.use(express.static("./methods-public")); 

//parse form data
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json());


app.post("/login", (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send("Enter a name");
});

app.get("/api/people", (req, res) => {
    res.status(200).json({success: true, data: people});
});

app.post("/api/people", (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg:"Please enter a value"});
    }
    res.status(201).json({success: true, person: name}); 
});

app.post("/api/people/postman", (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res
        .status(400)
        .json({success: false, msg:"Please enter a value"});
    }
    res.status(201).json({success: true, data: [...people, name]}); 
});

app.put("/api/people/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res
        .status(400)
        .json({success: false, msg:`No person with id ${id}`});
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(201).json({success: true, data: newPeople}); 
});

app.delete("/api/people/:id", (req, res) => {
    console.log(req.params.id);
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person) {
        return res
        .status(404)
        .json({success: false, msg:`No person with id ${req.params.id}`});
    }
    const newPeople = people.filter((person) => person.id !== req.params.id);
    res.status(200).json({success: true, data: newPeople}); 
});

app.listen(5000, () => {
    console.log("Server is listening on port 50000...");
}); 