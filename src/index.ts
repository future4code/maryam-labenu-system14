import {app} from "./app";
import { criarTurma } from "./endpoints/criarTurma";
import { testeInicial } from "./endpoints/testeInicial";

app.get("/", testeInicial)

app.post("/turma", criarTurma)
