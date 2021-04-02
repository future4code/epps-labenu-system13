
import { request, Request, Response } from "express";
import connection from "../Server/connection";


enum specialization{
    React="REACT",
    Redux="REDUX", 
    Css="CSS", 
    Testes="TESTES", 
    Typescript="TYPESCRIPT", 
    POO="Programação Orientada a Objetos", 
    Backend="BACKEND"
}

export let createTeacher = async (req: Request, res: Response) => {

    try {
        let classide = 0
        
        //Verificando se os dados estão completos
        if (!req.body.name || !req.body.email || !req.body.birth_date || !req.body.specialization) {
            throw new Error("Check all Fields")
        }

        //se Não Possuir Class_id o classide = 0, ou seja, classe q nao existe 
        if (req.body.class_id) {
            classide = req.body.class_id
        }
        console.log("req.body:", req.body)

        const response = await connection.raw(
            `
            INSERT INTO teacher (name, email, birth_date, specialization, class_id)
            VALUES(
                "${req.body.name}",
                "${req.body.email}",
                "${req.body.birth_date}",
                "${req.body.specialization}",
                ${classide}
            )
            `
        )
        res.status(201).send("Success")
    } catch (error) {
        res.status(400).send(error)
    }


}
export const getTeacher = async (req: Request, res: Response) =>{
    try {
        const result = await connection.raw(`
            SELECT * FROM teacher;
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")      
    }
}

export const insertstudentclass = async (req: Request, res: Response) => {
    try {
        if(!req.body.class_id || !req.body.id){
            throw new Error("Check the fields")
        }

        const result = await connection.raw(
        `
        UPDATE student 
        SET class_id = ${req.body.class_id}
        WHERE id = ${req.body.id};
        `
        )

        res.status(201).send("Successfully inserted")
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getAgeById = async (req: Request, res: Response) => {
    try {

        const result = await connection.raw(
            `
            SELECT birth_date FROM student WHERE (id = ${req.params.id});
            `
        )
        console.log(result[0][0].birth_date)
        let idadeString = (result[0][0].birth_date)
        console.log("idadeString", typeof idadeString)
            
        
        let ano = (idadeString.getFullYear())
       
        console.log(ano)
        let idade = 2021-Number(ano)
        console.log("idade", idade)
        res.status(200).send("idade do Usuário é: " + idade)
        
    } catch (error) {
        res.status(400).send(error)
    }
}



export let createHobbies = async(req: Request, res: Response) =>{
    try {
       
        if (!req.body.hobby || !req.body.id) {
            throw new Error("Check all Fields")
        }
        const response = await connection.raw(
            `
            INSERT INTO hobbies (id, hobby)
            VALUES(
                "${req.body.id}",
                "${req.body.hobby}"
            );
            `
        )
        res.status(201).send("Success")
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export let getHobbies = async (req: Request, res: Response) =>{
    try {
        const result = await connection.raw(`
            SELECT * FROM hobbies;
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")      
    }
}


export const createStudent = async (name:string, email:string, birthDate: Date, class_id: number) =>{
    const result = await connection.raw(`
        INSERT INTO student 
        (name, email, birth_date, class_id) 
        VALUES (
            "${name}",
            "${email}",
            "${birthDate}",
            ${class_id}
        );
    `)   
}


export const createClass = async (name:string, startDate: Date, finishDate: Date, modules:number) =>{
    const result = await connection.raw(`
        INSERT INTO class 
        (name, start_date, finish_date, modules) 
        VALUES (
            "${name}",
            "${startDate}",
            "${finishDate}",
            ${modules}
        );
    `)   
}


export let linkHobbies = async(req: Request, res: Response) =>{
    try {
       
        if (!req.body.hobbyId || !req.body.studentId) {
            throw new Error("Check all Fields")
        }
        const response = await connection.raw(
            `
            INSERT INTO student_hobbies (student_id, hobby_id)
            VALUES(
                ${req.body.studentId},
                ${req.body.hobbyId}
            );
            `
        )
        res.status(201).send("Success")
    } catch (error) {
        res.status(400).send(error)
    }
}

export let getStudentHobbies = async (req: Request, res: Response) =>{
    try {
        const result = await connection.raw(`
            SELECT * FROM student_hobbies;
        `)
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")      
    }
}

