import { sequelize } from "../database.js";
import { Aluno } from "./entity.js";

export async function create(aluno){
    await Aluno.create(
        {
            nome: aluno.nome,
            matricula: aluno.matricula
        }
    );
}

export async function findAll() {
    return await Aluno.findAll();
}

export async function findOne(id) {
    return await Aluno.findByPk(id);
}

export async function update(id, alunoNovo) {
    let aluno = await Aluno.findByPk(id);
    if(!aluno)
        throw new Error("Aluno não existe");
    await aluno.update({
        nome:alunoNovo.nome,
        matricula: alunoNovo.matricula
    });
    return aluno;
}

export async function destroy(id) {
    let aluno = await Aluno.findByPk(id);
    if(!aluno)
        throw new Error("Aluno não existe");
    await aluno.destroy();
}