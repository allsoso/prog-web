import * as alunoService from "./service.js";


export async function listarAlunos(req,res){
    let alunos = await alunoService.listarAlunos();
    res.status(200).json(alunos);
}

export async function visualizarAluno(req,res){
    let aluno = await alunoService.visualizarAluno(parseInt(req.params.id)-1);
    res.status(200).json(aluno);
}

export async function criarAluno(req,res){
    try {
        const aluno = await alunoService.criarAluno(req.body);
        res.status(201).json(aluno);
    } catch (error){
        if (error.message == 'Aluno com esta matrícula já foi criado.') {
            res.status(400).json({"msg": error.message});
        } else if (error.message == 'Curso não encontrado.') {
            res.status(400).json({"msg": error.message});
        } else {
            res.status(500).json({"msg": "Internal server error"});
        }
    }
}

export async function atualizarAluno(req,res){
    await alunoService.atualizarAluno(parseInt(req.params.id)-1,req.body);
    res.status(204).json();
}

export async function deletarAluno(req,res){
    await alunoService.deletarAluno(parseInt(req.params.id)-1);
    res.status(204).json();
}