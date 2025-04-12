import * as alunosRepo from "./repository.js";
import { visualizarCurso } from "../curso/service.js";

export async function listarAlunos(){
    return await alunosRepo.findAll();
}

export async function criarAluno(aluno){
    const alunos = await alunosRepo.findAll();
    const alunoExiste = alunos.some(a => a.matricula === aluno.matricula);
    
    if (alunoExiste) {
        throw new Error('Aluno com esta matrícula já foi criado.');
    }

    const curso = visualizarCurso(parseInt(aluno.curso)-1);
    if (!curso) {
        throw new Error('Curso não encontrado.');
    }

    await alunosRepo.create(aluno);
    return aluno;
}

export async function visualizarAluno(id){
    return await alunosRepo.findOne(id);
}

export async function atualizarAluno(id, alunoNovo){
    await alunosRepo.update(id,alunoNovo);
}

export async function atualizarCamposAluno(id, alunoNovo){
    const {nome,matricula,curso} = alunoNovo;
    let aluno = visualizarAluno(id);
    alunoNovo.nome = nome ? nome : aluno.nome;
    alunoNovo.matricula = matricula ? matricula : aluno.matricula;
    alunoNovo.curso = curso ? curso : aluno.curso;
    await alunosRepo.update(id,alunoNovo);
}

export async function deletarAluno(id){
    await alunosRepo.destroy(id);
}

