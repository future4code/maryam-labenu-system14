import {app} from "./app";
import { cadastrarEstudante } from "./endpoints/cadastrarEstudante";
import { criarTurma } from "./endpoints/criarTurma";
import { testeInicial } from "./endpoints/testeInicial";

app.get("/", testeInicial)

app.post("/turma", criarTurma)

app.post("/estudantes", cadastrarEstudante)