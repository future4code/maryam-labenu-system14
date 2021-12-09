import {app} from "./app";
import { cadastrarDocente } from "./endpoints/cadastrarDocente";
import { cadastrarEstudante } from "./endpoints/cadastrarEstudante";
import { buscarEstudante } from "./endpoints/buscarEstudante";
import { criarTurma } from "./endpoints/criarTurma";
import { testeInicial } from "./endpoints/testeInicial";
import { mudarEstudante } from "./endpoints/mudarEstudante";
import { buscarDocente } from "./endpoints/buscarDocentes";
import { mudarDocente } from "./endpoints/mudarDocente";

app.get("/", testeInicial)

app.post("/turma", criarTurma)





app.put("/estudantes", cadastrarEstudante)
app.get("/estudantes", buscarEstudante)
app.put("/estudantes/:id", mudarEstudante)




app.put("/docentes", cadastrarDocente)
app.get("/docentes", buscarDocente)
app.put("/docentes/:id", mudarDocente)


