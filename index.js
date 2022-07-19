"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const changeInstructor_1 = __importDefault(require("./endpoints/changeInstructor"));
const createClass_1 = __importDefault(require("./endpoints/createClass"));
const createInstructor_1 = __importDefault(require("./endpoints/createInstructor"));
const createStudent_1 = __importDefault(require("./endpoints/createStudent"));
const getClasses_1 = __importDefault(require("./endpoints/getClasses"));
const getInstructors_1 = __importDefault(require("./endpoints/getInstructors"));
const getStudent_1 = __importDefault(require("./endpoints/getStudent"));
const changeClass_1 = __importDefault(require("./endpoints/changeClass"));
app_1.app.post("/student", createStudent_1.default);
app_1.app.get("/student", getStudent_1.default);
app_1.app.get("/instructors", getInstructors_1.default);
app_1.app.get("/class", getClasses_1.default);
app_1.app.post("/class", createClass_1.default);
app_1.app.post("/instructor", createInstructor_1.default);
app_1.app.put("/instructor/:id", changeInstructor_1.default);
app_1.app.put("/class/:id", changeClass_1.default);
