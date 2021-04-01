import app from './Server/app'
import connection from './Server/connection'
import {createTeacher} from './Functions/Functions'

app;

app.post("/teacher/new", createTeacher);