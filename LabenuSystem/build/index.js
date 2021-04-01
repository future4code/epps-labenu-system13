"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./Server/app"));
const Functions_1 = require("./Functions/Functions");
app_1.default;
app_1.default.post("/teacher/new", Functions_1.createTeacher);
//# sourceMappingURL=index.js.map