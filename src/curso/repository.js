import { sequelize } from "../database.js";
import { Curso } from "./entity.js";

export async function create(curso) {
    await Curso.create(
        {
            nome:curso.nome,
            descricao:curso.descricao,
        }
    );
}

export async function findAll() {
    console.log("estou aqui");
    console.log(Curso.findAll());
    return Curso.findAll();
}

export async function findOne(id) {
    return Curso.findByPk(id);
}

export async function update(id, cursoNovo) {
    let curso = Curso.findByPk(id);
    if(!curso){
        throw new Error("Curso não encontrado");
    }
    await Curso.update(
        {
            nome:cursoNovo.nome,
            descricao:cursoNovo.descricao
        }
    );
    return curso;
}

export async function destroy(id) {
    let curso = Curso.findByPk(id);
    if(!curso)
        throw new Error("Curso não encontrado");
    await Curso.destroy(id);
}
