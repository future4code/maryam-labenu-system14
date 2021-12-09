import {app} from "./app";
import { cadastrarDocente } from "./endpoints/cadastrarDocente";
import { cadastrarEstudante } from "./endpoints/cadastrarEstudante";
import { criarTurma } from "./endpoints/criarTurma";
import { testeInicial } from "./endpoints/testeInicial";
import {pegarTurma} from "./endpoints/pegarTurma"

app.get("/", testeInicial)

app.post("/turma", criarTurma)
app.get("/turma", pegarTurma)

app.post("/estudantes", cadastrarEstudante)

app.post("/docentes", cadastrarDocente)
