import * as cursosRepo from "./repository.js";

export async function listarCursos(){
    return await cursosRepo.findAll();
}

export async function criarCurso(curso){
    const cursos = await cursosRepo.findAll();
    const cursoExiste = cursos.some(c => c.id === curso.id);

    if (cursoExiste){
        throw new Error("Curso já foi cadastrado");
    }

    await cursosRepo.create(curso);
    return curso;
}

export async function visualizarCurso(id){
    return await cursosRepo.findOne(parseInt(id));
}

export async function atualizarCurso(id, cursoNovo){
    await cursosRepo.update(id, cursoNovo);
}

export async function atualizarCamposCurso(id, cursoNovo){
    const {nome, descricao} = cursoNovo;
    let curso = visualizarCurso(id);
    cursoNovo.nome = nome ? nome : curso.nome;
    cursoNovo.descricao = descricao ? descricao : curso.descricao;
    await cursosRepo.update(id, cursoNovo);
}

export async function deletarCurso(id){
    await cursosRepo.destroy(id);
}
