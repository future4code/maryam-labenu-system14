import {app} from "./app";
import { cadastrarDocente } from "./endpoints/docentes/cadastrarDocente";
import { cadastrarEstudante } from "./endpoints/estudantes/cadastrarEstudante";
import { buscarEstudante } from "./endpoints/estudantes/buscarEstudante";
import { criarTurma } from "./endpoints/criarTurma";
import { testeInicial } from "./endpoints/testeInicial";
import { mudarEstudante } from "./endpoints/estudantes/mudarEstudante";
import { buscarDocente } from "./endpoints/docentes/buscarDocentes";
import { mudarDocente } from "./endpoints/docentes/mudarDocente";

app.get("/", testeInicial)

app.post("/turma", criarTurma)





app.put("/estudantes", cadastrarEstudante)
app.get("/estudantes", buscarEstudante)
app.put("/estudantes/:id", mudarEstudante)




app.put("/docentes", cadastrarDocente)
app.get("/docentes", buscarDocente)
app.put("/docentes/:id", mudarDocente)


