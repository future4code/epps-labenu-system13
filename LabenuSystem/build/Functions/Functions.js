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
exports.createClass = exports.createStudent = void 0;
const connection_1 = __importDefault(require("../Server/connection"));
const createStudent = (name, email, birthDate, hobbies, class_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.default.raw(`
        INSERT INTO student 
        (name, email, birth_date, hobbies, class_id) 
        VALUES (
            "${name}",
            "${email}",
            "${birthDate}",
            "${hobbies}",
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
const createActor = (id, name, salary, dateOfBirth, gender) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield connection_1.default.raw(`
        INSERT INTO ACTOR
        (id, name, salary, birth_date, gender)
        VALUES(
            "${id}",
            "${name}",
            ${salary},
            "${dateOfBirth}",
            "${gender}"
        );
    `);
});
//# sourceMappingURL=Functions.js.map