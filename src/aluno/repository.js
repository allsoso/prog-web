import { database } from "../knexfile";

export async function create(aluno){
    await database('aluno').insert({
        nome: aluno.nome,
        matricula: aluno.matricula
    })
}
export async function findAll() {
    return database.select().from('aluno');
}

export async function findOne(id) {
    return database.select().from('aluno').where({id:id});
}

export async function update(id, alunoNovo) {
    await database('aluno').where({id:id}).update({
        nome: alunoNovo.nome,
        matricula: alunoNovo.matricula
    });
}

export async function destroy(id) {
    return database('aluno').where({id:id}).del();
}