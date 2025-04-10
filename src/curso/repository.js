import { database } from "../knexfile.js";

export async function create(curso) {
    await database('curso').insert({
        nome: curso.nome,
        descricao: curso.descricao
    });
}

export async function findAll() {
    return database.select().from('curso');
}

export async function findOne(id) {
    return database.select().from('curso').where({id:id});
}

export async function update(id, cursoNovo) {
    await database('curso').where({id:id}).update({
        nome: cursoNovo.nome,
        descricao: cursoNovo.descricao
    });
}

export async function destroy(id) {
    return database('curso').where({id:id}).del();
}
