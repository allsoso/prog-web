const tableName = "curso";

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();
  await knex(tableName).insert([
    { nome: 'Arquitetura', descricao: 'curso sobre arquitetura de computadores' },
    { nome: 'Programação', descricao: 'curso sobre programação' }
  ]);
};
