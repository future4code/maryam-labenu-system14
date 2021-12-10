import {app} from "./app";
import { cadastrarDocente } from "./endpoints/docentes/cadastrarDocente";
import { cadastrarEstudante } from "./endpoints/estudantes/cadastrarEstudante";
import { buscarEstudante } from "./endpoints/estudantes/buscarEstudante";
import { criarTurma } from "./endpoints/turmas/criarTurma";
import { testeInicial } from "./endpoints/testeInicial";
import { mudarEstudante } from "./endpoints/estudantes/mudarEstudante";
import { buscarDocente } from "./endpoints/docentes/buscarDocentes";
import { mudarDocente } from "./endpoints/docentes/mudarDocente";
import { pegarTurma } from "./endpoints/turmas/pegarTurma";
import { mudarModuloTurma } from "./endpoints/turmas/mudarModuloTurma";
import { cadastrarHobby } from "./endpoints/hobby/cadastrarHobby";
import { cadastrarHobbyEstudante } from "./endpoints/hobby/cadastrarHobbyEstudante";
import { buscarHobby } from "./endpoints/hobby/buscarHobby";
import { buscarTodosEstudantes } from "./endpoints/estudantes/buscarTodosEstudantes";
import { cadastrarEspecialidadeDocentes } from "./endpoints/especialidades/cadastrarEspecialidadesDocentes";
import { buscarEspecialidades } from "./endpoints/especialidades/buscarEspecialidades";
import { cadastrarEspecialidades } from "./endpoints/especialidades/cadastrarEspecialidades";

app.get("/", testeInicial)
//endpoints para Turma

app.post("/turma", criarTurma)
app.get("/turma", pegarTurma)
app.put("/turma/:id", mudarModuloTurma)

//endpoints para Estudantes

app.post("/estudantes", cadastrarEstudante)
app.get("/estudantes", buscarEstudante) //para buscar estudante por nome
app.get("/todosEstudantes", buscarTodosEstudantes)
app.post("/estudantes/:id", mudarEstudante)


//endpoints para Hobby

app.post("/hobby", cadastrarHobby) // para cadastrar hobby
app.post("/estudante/hobby", cadastrarHobbyEstudante) // para cadastrar hobby por estudante
app.get("/hobby", buscarHobby)


//endpoints para Docentes

app.post("/docentes", cadastrarDocente)
app.get("/docentes", buscarDocente)
app.put("/docentes/:id", mudarDocente)


//endpoints para Especialidades

app.post("/especialidade", cadastrarEspecialidades) // para cadastrar especialidade
app.put("/docente/especialidade", cadastrarEspecialidadeDocentes) // para cadastrar especialidade por docente
app.get("/especialidade", buscarEspecialidades)
