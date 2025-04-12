import express from 'express';
import { atualizarAluno, atualizarCamposAluno, criarAluno, deletarAluno, listarAlunos, visualizarAluno } from './aluno/controller.js';
import { atualizarCamposCurso, atualizarCurso, criarCurso, deletarCurso, listarCursos, visualizarCurso } from './curso/controller.js';

const app = express();
const port = 3000;

app.use(express.json());

// Aluno routes
app.get("/alunos",listarAlunos);
app.get("/aluno/:id",visualizarAluno);
app.post("/aluno",criarAluno);
app.put("/aluno/:id",atualizarAluno);
app.patch("/aluno/:id",atualizarCamposAluno);
app.delete("/aluno/:id",deletarAluno);

// Curso routes
app.get("/cursos", listarCursos);
app.get("/curso/:id", visualizarCurso);
app.post("/curso", criarCurso);
app.put("/curso/:id", atualizarCurso);
app.patch("/curso/:id", atualizarCamposCurso);
app.delete("/curso/:id", deletarCurso);

app.listen(port,() => console.log("Api executada"));

