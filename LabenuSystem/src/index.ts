import app from './Server/app'
import connection from './Server/connection'


import {createTeacher, getAgeById,createClass, createStudent, insertstudentclass} from './Functions/Functions'

app;

app.post("/teacher/new", createTeacher);
app.get("/teacher", getTeacher);

app.put("/student/insert/", insertstudentclass)

app.get("/student/get/:id", getAgeById)

app.post("/estudante", (req, res)=>{
    const error = 400
    try {
        createStudent(
            req.body.name,
            req.body.email,
            req.body.birth_date,
            req.body.class_id
        )
        res.status(200).send("Success!");
    } catch (error) {
        res.status(error).send({
            message: error.message,
          });
    }
})


app.post("/turma", async (req, res)=>{
    let error = 400
    try {
        if(req.body.modules >7 || req.body.modules <0 || !Number.isInteger(req.body.modules)){
            error = 430
            throw new Error("Modules has to be an integer between 0 and 7");
        }
        createClass(
            req.body.name,
            req.body.start_date,
            req.body.finish_date,
            req.body.modules
        )
        res.status(200).send("Success!");
    } catch (error) {
        res.status(error).send({
            message: error.message,
          });
    }
})

app.get("/turma", async (req, res)=>{
    try{
        const result = await connection.raw(`
        SELECT * FROM class;`)
        res.status(201).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})


app.get("/estudante", async (req, res)=>{
    try{
        const result = await connection.raw(`
        SELECT * FROM student;`)
        res.status(201).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})

import {createHobbies, getHobbies} from "./Functions/Functions"
app.post("/hobbies", createHobbies)
app.get("/hobbies", getHobbies)

import {linkHobbies, getStudentHobbies} from "./Functions/Functions"
app.post("/estudante/hobbies", linkHobbies)
app.get("/estudante/hobbies", getStudentHobbies)


