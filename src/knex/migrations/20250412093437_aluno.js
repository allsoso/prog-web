const tableName = "aluno";

export async function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id');
    table.string('nome', 100).notNullable();
    table.string('matricula', 100).notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable(tableName);
}
