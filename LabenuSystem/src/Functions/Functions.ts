import connection from "../Server/connection"

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