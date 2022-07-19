import { app } from "./app";
import changeInstructor from "./endpoints/changeInstructor";
import createClass from "./endpoints/createClass";
import createInstructor from "./endpoints/createInstructor";
import createStudent from "./endpoints/createStudent";
import getClasses from "./endpoints/getClasses";
import getInstructors from "./endpoints/getInstructors";
import getStudents from "./endpoints/getStudents";
import changeClass from "./endpoints/changeClass";
import changeStudent from "./endpoints/changeStudent";


app.get("/student/:name", getStudents)
app.get("/instructors", getInstructors)
app.get("/class", getClasses)
app.post("/class", createClass)
app.post("/instructor", createInstructor)
app.post("/student", createStudent)
app.put("/instructor/:id",changeInstructor)
app.put("/class/:id",changeClass)
app.put("/student/:id",changeStudent)



