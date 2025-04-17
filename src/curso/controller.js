import * as cursoService from "./service.js";

export async function listarCursos(req,res){
    let cursos = await cursoService.listarCursos();
    res.status(200).json(cursos);
}

export async function visualizarCurso(req,res){
    let curso = await cursoService.visualizarCurso(parseInt(req.params.id));
    if (!curso) {
        return res.status(404).json({"msg": "Curso não encontrado"});
    }
    res.status(200).json(curso);
}

export async function criarCurso(req,res){
    try {
        const curso = await cursoService.criarCurso(req.body);
        res.status(201).json(curso);
    } catch (error){
        if (error.message == "Curso já foi cadastrado"){
            res.status(400).json({"msg":"Curso já havia sido criado."});
        }else {
            res.status(500).json({"msg":"Curso não criado."});
        }
    }
}

export async function atualizarCurso(req,res){
    try{
        await cursoService.atualizarCurso(parseInt(req.params.id), req.body);
        res.status(204).json();
    }catch (error){
        res.status(404).json({"msg":"Curso não encontrado"});
    }
}

export async function atualizarCamposCurso(req,res){
    await cursoService.atualizarCamposCurso(parseInt(req.params.id), req.body);
    res.status(204).json();
}

export async function deletarCurso(req,res){
    try{
        await cursoService.deletarCurso(parseInt(req.params.id));
        res.status(204).json();
    }catch(error){
        res.status(404).json({"msg":"Curso não encontrado"});
    }
}
