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
const app_1 = __importDefault(require("./Server/app"));
const connection_1 = __importDefault(require("./Server/connection"));
const Functions_1 = require("./Functions/Functions");
app_1.default;
app_1.default.post("/teacher/new", Functions_1.createTeacher);
app_1.default.get("/teacher", Functions_1.getTeacher);
const Functions_2 = require("./Functions/Functions");
app_1.default.post("/estudante", (req, res) => {
    const error = 400;
    try {
        Functions_2.createStudent(req.body.name, req.body.email, req.body.birth_date, req.body.class_id);
        res.status(200).send("Success!");
    }
    catch (error) {
        res.status(error).send({
            message: error.message,
        });
    }
});
app_1.default.post("/turma", (req, res) => {
    let error = 400;
    try {
        if (req.body.modules > 7 || req.body.modules < 0 || !Number.isInteger(req.body.modules)) {
            error = 430;
            throw new Error("Modules has to be an integer between 0 and 7");
        }
        Functions_2.createClass(req.body.name, req.body.start_date, req.body.finish_date, req.body.modules);
        res.status(200).send("Success!");
    }
    catch (error) {
        res.status(error).send({
            message: error.message,
        });
    }
});
app_1.default.get("/turma", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
        SELECT * FROM class;`);
        res.status(201).send(result[0]);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred");
    }
}));
app_1.default.get("/estudante", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield connection_1.default.raw(`
        SELECT * FROM student;`);
        res.status(201).send(result[0]);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("An unexpected error occurred");
    }
}));
const Functions_3 = require("./Functions/Functions");
app_1.default.post("/hobbies", Functions_3.createHobbies);
app_1.default.get("/hobbies", Functions_3.getHobbies);
const Functions_4 = require("./Functions/Functions");
app_1.default.post("/estudante/hobbies", Functions_4.linkHobbies);
app_1.default.get("/estudante/hobbies", Functions_4.getStudentHobbies);
//# sourceMappingURL=index.js.map