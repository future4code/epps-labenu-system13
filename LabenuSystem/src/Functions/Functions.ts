
import { Request, Response } from "express";
import connection from "../Server/connection";

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



export const createStudent = async (name:string, email:string, birthDate: Date, hobbies:string, class_id: number) =>{
    const result = await connection.raw(`
        INSERT INTO student 
        (name, email, birth_date, hobbies, class_id) 
        VALUES (
            "${name}",
            "${email}",
            "${birthDate}",
            "${hobbies}",
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
const createActor = async(id: string, name: string, salary: number, dateOfBirth: Date, gender: string): Promise<any> =>{
    const result = await connection.raw(`
        INSERT INTO ACTOR
        (id, name, salary, birth_date, gender)
        VALUES(
            "${id}",
            "${name}",
            ${salary},
            "${dateOfBirth}",
            "${gender}"
        );
    `)
 }
