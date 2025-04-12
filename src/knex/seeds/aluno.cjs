const tableName = "aluno";

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();
  await knex(tableName).insert([
    { nome: 'Diego', matricula: '123' },
    { nome: 'Cardoso', matricula: '456' }
  ]);
};
