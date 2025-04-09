import * as cursosRepo from "./repository.js";

export function listarCursos(){
    return cursosRepo.findAll();
}

export function criarCurso(curso){
    const cursos = cursosRepo.findAll();
    const cursoExiste = cursos.some(c => c.id === curso.id);

    if (cursoExiste){
        throw new Error("Curso já foi cadastrado");
    }

    cursosRepo.create(curso);
    return curso;
}

export function visualizarCurso(id){
    return cursosRepo.findOne(id);
}

export function atualizarCurso(id, cursoNovo){
    cursosRepo.update(id, cursoNovo);
}

export function deletarCurso(id){
    cursosRepo.destroy(id);
}
