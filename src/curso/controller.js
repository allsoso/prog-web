import * as cursoService from "./service.js";

export function listarCursos(req,res){
    let cursos = cursoService.listarCursos();
    res.status(200).json(cursos);
}

export function visualizarCurso(req,res){
    let curso = cursoService.visualizarCurso(parseInt(req.params.id)-1);
    if (!curso) {
        return res.status(404).json({"msg": "Curso não encontrado"});
    }
    res.status(200).json(curso);
}

export function criarCurso(req,res){
    try {
        const curso = cursoService.criarCurso(req.body);
        res.status(201).json(curso);
    } catch (error){
        if (error.message == "Curso já foi cadastrado"){
            res.status(400).json({"msg":"Curso já havia sido criado."});
        }else {
            res.status(500).json({"msg":"Curso não criado."});
        }
    }
}

export function atualizarCurso(req,res){
    cursoService.atualizarCurso(parseInt(req.params.id)-1, req.body);
    res.status(204).json();
}

export function deletarCurso(req,res){
    cursoService.deletarCurso(parseInt(req.params.id)-1);
    res.status(204).json();
}
