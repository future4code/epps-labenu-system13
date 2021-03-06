"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

exports.getStudentHobbies = exports.linkHobbies = exports.createClass = exports.createStudent = exports.getHobbies = exports.createHobbies = exports.getTeacher = exports.createTeacher = void 0;


const connection_1 = __importDefault(require("../Server/connection"));
var specialization;
(function (specialization) {
    specialization["React"] = "REACT";
    specialization["Redux"] = "REDUX";
    specialization["Css"] = "CSS";
    specialization["Testes"] = "TESTES";
    specialization["Typescript"] = "TYPESCRIPT";
    specialization["POO"] = "Programa\u00E7\u00E3o Orientada a Objetos";
    specialization["Backend"] = "BACKEND";
})(specialization || (specialization = {}));
let createTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let classide = 0;
        if (!req.body.name || !req.body.email || !req.body.birth_date || !req.body.specialization) {
            throw new Error("Check all Fields");
        }
        if (req.body.class_id) {
            classide = req.body.class_id;
        }
        console.log("req.body:", req.body);
        const response = yield connection_1.default.raw(`
            INSERT INTO teacher (name, email, birth_date, specialization, class_id)
            VALUES(
                "${req.body.name}",
                "${req.body.email}",
                "${req.body.birth_date}",
                "${req.body.specialization}",
                ${classide}
            )
            `);
        res.status(201).send("Success");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createTeacher = createTeacher;

const getTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
            SELECT * FROM teacher;
        `);
        res.status(200).send(result[0]);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred");
    }
});
exports.getTeacher = getTeacher;
let createHobbies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.hobby || !req.body.id) {
            throw new Error("Check all Fields");
        }
        const response = yield connection_1.default.raw(`
            INSERT INTO hobbies (id, hobby)
            VALUES(
                "${req.body.id}",
                "${req.body.hobby}"
            );
            `);
        res.status(201).send("Success");

const insertstudentclass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.class_id || !req.body.id) {
            throw new Error("Check the fields");
        }
        const result = yield connection_1.default.raw(`
        UPDATE student 
        SET class_id = ${req.body.class_id}
        WHERE id = ${req.body.id};
        `);
        res.status(201).send("Successfully inserted");

    }
    catch (error) {
        res.status(400).send(error);
    }
});

exports.createHobbies = createHobbies;
let getHobbies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
            SELECT * FROM hobbies;
        `);
        res.status(200).send(result[0]);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred");
    }
});
exports.getHobbies = getHobbies;
const createStudent = (name, email, birthDate, class_id) => __awaiter(void 0, void 0, void 0, function* () {

exports.insertstudentclass = insertstudentclass;
const getAgeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
            SELECT birth_date FROM student WHERE (id = ${req.params.id});
            `);
        console.log(result[0][0].birth_date);
        let idadeString = (result[0][0].birth_date);
        console.log("idadeString", typeof idadeString);
        let ano = (idadeString.getFullYear());
        console.log(ano);
        let idade = 2021 - Number(ano);
        console.log("idade", idade);
        res.status(200).send("idade do Usu??rio ??: " + idade);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getAgeById = getAgeById;
const createStudent = (name, email, birthDate, hobbies, class_id) => __awaiter(void 0, void 0, void 0, function* () {

    const result = yield connection_1.default.raw(`
        INSERT INTO student 
        (name, email, birth_date, class_id) 
        VALUES (
            "${name}",
            "${email}",
            "${birthDate}",
            ${class_id}
        );
    `);
});
exports.createStudent = createStudent;
const createClass = (name, startDate, finishDate, modules) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.default.raw(`
        INSERT INTO class 
        (name, start_date, finish_date, modules) 
        VALUES (
            "${name}",
            "${startDate}",
            "${finishDate}",
            ${modules}
        );
    `);
});
exports.createClass = createClass;
let linkHobbies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.hobbyId || !req.body.studentId) {
            throw new Error("Check all Fields");
        }
        const response = yield connection_1.default.raw(`
            INSERT INTO student_hobbies (student_id, hobby_id)
            VALUES(
                ${req.body.studentId},
                ${req.body.hobbyId}
            );
            `);
        res.status(201).send("Success");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.linkHobbies = linkHobbies;
let getStudentHobbies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
            SELECT * FROM student_hobbies;
        `);
        res.status(200).send(result[0]);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred");
    }
});

exports.getStudentHobbies = getStudentHobbies;


//# sourceMappingURL=Functions.js.map