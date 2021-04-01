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
exports.createTeacher = void 0;
const connection_1 = __importDefault(require("../Server/connection"));
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
//# sourceMappingURL=Functions.js.map