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